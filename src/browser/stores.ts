/**
 * The workspace browser's viewing store: the session-list grouping mode,
 * persisted across reloads. Module level exports the factory only (a
 * module-level handle would pin the store identity across plugin reloads);
 * register() receives the factory and the browser derives its PropsStore
 * share from the return type.
 */
import { defineStore, type EngineStoreHandle } from '@deepseek-ai/dsh-client-store'
import type { SessionListState } from '@deepseek-ai/dsh-api-session-controller/client'
import type { SessionId } from '@deepseek-ai/dsh-session/types'
import {
  reconcileManualOrder, type ArchivedFilter, type SessionRowState, type SessionStatusFilter,
  type SessionTimeBucket,
} from './tree.ts'

/** Browser-local order account for the hierarchy-free flat Session list. */
export const FLAT_SESSION_ORDER_KEY = '__flat_session_order__'

/**
 * Session-list grouping mode: sibling Workspace sections, a Workspace tree,
 * one flat list, one flat list bucketed by update day, or one bucketed by the
 * Session's tag.
 */
export type SessionGroupBy = 'workspace' | 'workspace-tree' | 'flat' | 'time' | 'tag'
/** Session order: saved manual positions or current recency. */
export type SessionOrderBy = 'manual' | 'updated'
/**
 * Title/timestamp type scale. 'normal' keeps the shipped type metrics
 * (14px/20px titles, 12px counts, 10px timestamps) in the 28px row this plugin
 * has always used, so the default reads like the native sidebar; 'small' and
 * 'large' move two pixels either side so the three presets are told apart at a
 * glance rather than by 1px steps.
 */
export type TextScale = 'small' | 'normal' | 'large'

/**
 * One row rhythm per scale, as the custom properties the row and list styles
 * read. A scale is a density, not just a glyph size: the point of picking the
 * small one is to read more rows in the same viewport, so the row box and the
 * gaps between rows shrink with the type. Sizes keep the shipped ratios (a
 * 14px title over a 10px timestamp) so every preset still looks like one
 * family, and the preset carries the row box and the list gaps as well, which
 * keeps every row type — Workspace, Session, bucket header, "show more" — on
 * the same rhythm.
 */
export const TEXT_SCALE_CSS: Readonly<Record<TextScale, {
  title: string
  line: string
  meta: string
  time: string
  row: string
  rowGap: string
  groupGap: string
}>> = {
  small: { title: '12px', line: '16px', meta: '10px', time: '9px', row: '24px', rowGap: '1px', groupGap: '3px' },
  normal: { title: '14px', line: '20px', meta: '12px', time: '10px', row: '28px', rowGap: '2px', groupGap: '4px' },
  large: { title: '16px', line: '22px', meta: '13px', time: '11px', row: '32px', rowGap: '3px', groupGap: '6px' },
}

/** Whether a persisted value is one of the scale presets. */
export function isTextScale(value: unknown): value is TextScale {
  return value === 'small' || value === 'normal' || value === 'large'
}

/** Workspace browser viewing state persisted across surface remounts and reloads. */
type WorkspaceViewState = {
  groupBy: SessionGroupBy
  orderBy: SessionOrderBy
  /** Explicit group expansion keyed by Workspace identity, including descendants in tree mode. */
  groupExpansion: Record<string, boolean>
  /** Saved manual order per Workspace group plus the browser-local flat-list account. */
  sessionOrderByAccount: Record<string, string[]>
  /** Archived-row visibility; omitted in pre-filter v5 snapshots and read as 'default'. */
  archivedFilter?: ArchivedFilter
  /** Status tab above the list; omitted in older snapshots and read as 'all'. */
  statusFilter?: SessionStatusFilter
  /** Time buckets the user folded; absent keys stay open. */
  timeBucketExpansion: Record<string, boolean>
  /** Tag groups the user folded, keyed by tag id or the untagged key. */
  tagExpansion?: Record<string, boolean>
  /** Title/timestamp scale; omitted in older snapshots and read as 'normal'. */
  textScale?: TextScale
  /** Row-end Workspace name in the flattened views; omitted reads as off. */
  showWorkspaceName?: boolean
}

type SessionOrderSource = {
  members: Readonly<Record<string, readonly SessionId[]>>
  summaries: SessionListState['byId']
  rowState: Pick<SessionRowState, 'pinnedSessionIds' | 'archivedSessionIds'>
}

/**
 * Annotation twin of the actions literal below (the export needs a declared
 * return type); drift fails assignability at the defineStore call.
 */
type WorkspaceViewActions = {
  setGroupBy: (draft: WorkspaceViewState, mode: SessionGroupBy) => void
  setOrderBy: (
    draft: WorkspaceViewState,
    mode: SessionOrderBy,
    initialOrders: Readonly<Record<string, readonly string[]>>,
  ) => void
  setGroupExpanded: (draft: WorkspaceViewState, key: string, expanded: boolean) => void
  retainAccountKeys: (draft: WorkspaceViewState, workspaceKeys: readonly string[]) => void
  syncSessionOrders: (
    draft: WorkspaceViewState,
    orders: Readonly<Record<string, readonly string[]>>,
  ) => void
  setSessionOrder: (
    draft: WorkspaceViewState,
    accountKey: string,
    order: readonly string[],
    initialOrders: Readonly<Record<string, readonly string[]>>,
  ) => void
  pinSessionOrder: (
    draft: WorkspaceViewState,
    sessionId: string,
    accountKeys: readonly string[],
    source: SessionOrderSource,
  ) => void
  setArchivedFilter: (draft: WorkspaceViewState, filter: ArchivedFilter) => void
  setStatusFilter: (draft: WorkspaceViewState, filter: SessionStatusFilter) => void
  setTimeBucketExpanded: (draft: WorkspaceViewState, key: SessionTimeBucket, expanded: boolean) => void
  setTagExpanded: (draft: WorkspaceViewState, key: string, expanded: boolean) => void
}

/** Copy read-only projections into the persisted mutable store representation. */
function copySessionOrders(
  orders: Readonly<Record<string, readonly string[]>>,
): Record<string, string[]> {
  return Object.fromEntries(Object.entries(orders).map(([key, order]) => [key, [...order]]))
}

/**
 * Create the workspace browser viewing store handle.
 * @returns the store handle (spec + type + identity + factory in one).
 */
export function createWorkspaceViewStore(): EngineStoreHandle<WorkspaceViewState, WorkspaceViewActions> {
  return defineStore({
    init: (): WorkspaceViewState => ({
      groupBy: 'workspace',
      orderBy: 'updated',
      groupExpansion: {},
      sessionOrderByAccount: {},
      archivedFilter: 'default',
      statusFilter: 'all',
      timeBucketExpansion: {},
      tagExpansion: {},
    }),
    persist: 'dsh.workspace.view.v5',
    actions: {
      setGroupBy: (d, mode: SessionGroupBy) => { d.groupBy = mode },
      setOrderBy: (d, mode: SessionOrderBy, initialOrders) => {
        if (mode === d.orderBy) return
        d.sessionOrderByAccount = mode === 'manual' ? copySessionOrders(initialOrders) : {}
        d.orderBy = mode
      },
      setGroupExpanded: (d, key: string, expanded: boolean) => { d.groupExpansion[key] = expanded },
      retainAccountKeys: (d, workspaceKeys: readonly string[]) => {
        const retained = new Set(workspaceKeys)
        d.groupExpansion = Object.fromEntries(
          Object.entries(d.groupExpansion).filter(([key]) => retained.has(key)),
        )
        d.sessionOrderByAccount = Object.fromEntries(
          Object.entries(d.sessionOrderByAccount).filter(([key]) => retained.has(key)),
        )
        delete (d as WorkspaceViewState & { sessionUpdatedAtByAccount?: unknown }).sessionUpdatedAtByAccount
      },
      syncSessionOrders: (d, orders) => {
        if (d.orderBy !== 'manual') return
        Object.assign(d.sessionOrderByAccount, copySessionOrders(orders))
      },
      setSessionOrder: (d, accountKey, order, initialOrders) => {
        if (d.orderBy === 'updated') d.sessionOrderByAccount = copySessionOrders(initialOrders)
        else Object.assign(d.sessionOrderByAccount, copySessionOrders(initialOrders))
        d.orderBy = 'manual'
        d.sessionOrderByAccount[accountKey] = [...order]
      },
      pinSessionOrder: (d, sessionId, accountKeys, source) => {
        const selected = new Set(accountKeys)
        d.sessionOrderByAccount = Object.fromEntries(Object.entries(source.members).map(([key, members]) => {
          const order = reconcileManualOrder(members, d.sessionOrderByAccount[key], source.summaries, source.rowState)
          return [key, selected.has(key) ? [sessionId, ...order.filter(id => id !== sessionId)] : order]
        }))
      },
      setArchivedFilter: (d, filter: ArchivedFilter) => { d.archivedFilter = filter },
      setStatusFilter: (d, filter: SessionStatusFilter) => { d.statusFilter = filter },
      setTimeBucketExpanded: (d, key: SessionTimeBucket, expanded: boolean) => {
        d.timeBucketExpansion = { ...d.timeBucketExpansion, [key]: expanded }
      },
      setTagExpanded: (d, key: string, expanded: boolean) => {
        d.tagExpansion = { ...d.tagExpansion, [key]: expanded }
      },
    },
  })
}

/** The bound write set of one viewing-store instance (what the UiWorkspace service drives). */
export type WorkspaceViewStoreActions = ReturnType<ReturnType<typeof createWorkspaceViewStore>['create']>['actions']
