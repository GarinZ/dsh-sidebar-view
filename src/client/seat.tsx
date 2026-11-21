/**
 * Seat: take over the live `sidebar.workspaces` component without
 * disabling the shipped package.
 *
 * Why this shape
 * - The shipped @deepseek-ai/dsh-client-ui-workspace entry owns a dozen child
 *   slot declarations, the row/context-menu actions, the shell overlays and the
 *   service other packages inject (`uiWorkspace`). Disabling it makes this
 *   plugin their only provider, so any failure here takes the whole client down.
 * - Instead we keep that package loaded and replace only the *component* of its
 *   live slot entry. Its wiring (children, store seat, inject seat, locale,
 *   actions, overlays, shortcuts) stays authoritative; our component renders
 *   through the very same props — including `renderSlot`, so third-party row
 *   decorations keep working.
 * - Failure is local: if this bundle never loads, the shipped component is
 *   untouched; if our component throws, the boundary renders the saved
 *   component with the original props.
 */
import * as React from 'react'
import { MenuItemButton } from '@deepseek-ai/dsh-client-ui-primitives'
import { isSessionColorId, parseIconSpec } from '../browser/appearance.ts'
import { AppearanceIcon } from '../browser/appearance-icon.tsx'
import { requestAppearance } from '../browser/appearance-request.ts'
import { WorkspaceBrowser } from '../browser/rows/WorkspaceBrowser.tsx'
import { de, en, es, fr, ja, pt, ru, zh } from '../browser/locales.ts'
import { isTextScale, type TextScale } from '../browser/stores.ts'

export const name = 'dsh-sidebar-view'
/**
 * `slots` is all the seat itself needs; the rest mirrors what the shipped
 * browser injects, so ordering behind it is explicit. When the shipped entry is
 * absent this plugin does nothing and the client boots exactly as without it.
 */
export const inject = [
  'slots', 'contextMenus', 'sessions', 'workspaces', 'locale', 'remote',
  'remote.directoryPicker', 'layout', 'shortcuts', 'remoteAccess',
]

/** The slot we seat on: the sidebar's workspace/session browsing region. */
const SLOT = 'sidebar.workspaces'

type Dict = Record<string, string>
type SlotEntry = { component: unknown; options?: { id?: string } }
type Dispose = () => void
type Slots = {
  entries(name: string): SlotEntry[]
  subscribe(name: string, fn: () => void): () => void
  register(options: Record<string, unknown>, component: unknown): Dispose
  inject(name: string, fn: () => undefined | Dispose | Iterable<Dispose>): void
}
type LocaleService = { bind(namespace: string): Translate }
/** One row of a shipped context menu; the shipped kinds are all this shape. */
type MenuActionEntry = {
  id: string
  label: string
  icon?: { key: string }
  danger?: boolean
  separatorBefore?: boolean
  run: () => void
}
type ContextMenus = {
  register(options: {
    id: string
    target: 'workspace'
    order?: number
    resolve: (owner: { workspaceId: string; displayTitle: string }) => readonly MenuActionEntry[]
  }): Dispose
}
type AnyCtx = { get(name: string): unknown; effect(fn: () => Dispose, label: string): void }

/* ------------------------------------------------------------------ *
 * Increment state: the fields the shipped store does not know about.
 * The shipped store keeps owning groupBy/orderBy/groupExpansion/...,
 * so every write the shipped service makes stays visible to our UI.
 * ------------------------------------------------------------------ */

type Plus = {
  timeMode: boolean
  statusFilter: string
  timeBucketExpansion: Record<string, boolean>
  textScale: TextScale
  showWorkspaceName: boolean
  /** Workspace id to an `emoji:` / `icon:` spec; absent means the shipped folder glyph. */
  workspaceIcons: Record<string, string>
  /** Session id to a palette id; absent means no accent. */
  sessionColors: Record<string, string>
}

/** Enough for every Workspace/Session one person is likely to decorate, and a hard stop for a corrupt store. */
const MAX_APPEARANCE_ENTRIES = 400

const PLUS_KEY = 'dsh.workspace.view.sidebar-view.v1'
const PLUS_INIT: Plus = {
  timeMode: false, statusFilter: 'all', timeBucketExpansion: {}, textScale: 'normal', showWorkspaceName: false,
  workspaceIcons: {}, sessionColors: {},
}

/**
 * Keep only entries this build can still render: a dropped icon name or an
 * unknown palette id degrades to the default look instead of an empty cell.
 * @param raw - the stored record.
 * @param valid - predicate for one stored value.
 * @returns a fresh record, capped at {@link MAX_APPEARANCE_ENTRIES}.
 */
function readAppearanceRecord(raw: unknown, valid: (value: string) => boolean): Record<string, string> {
  if (typeof raw !== 'object' || raw === null) return {}
  const out: Record<string, string> = {}
  let kept = 0
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (kept >= MAX_APPEARANCE_ENTRIES) break
    if (typeof value === 'string' && valid(value)) {
      out[key] = value
      kept += 1
    }
  }
  return out
}

function readPlus(): Plus {
  try {
    const raw = globalThis.localStorage?.getItem(PLUS_KEY)
    if (raw === null || raw === undefined) return PLUS_INIT
    const parsed = JSON.parse(raw) as Partial<Plus>
    return {
      timeMode: parsed.timeMode === true,
      statusFilter: typeof parsed.statusFilter === 'string' ? parsed.statusFilter : 'all',
      timeBucketExpansion: typeof parsed.timeBucketExpansion === 'object' && parsed.timeBucketExpansion !== null
        ? parsed.timeBucketExpansion
        : {},
      textScale: isTextScale(parsed.textScale) ? parsed.textScale : PLUS_INIT.textScale,
      showWorkspaceName: parsed.showWorkspaceName === true,
      workspaceIcons: readAppearanceRecord(parsed.workspaceIcons, value => parseIconSpec(value) !== null),
      sessionColors: readAppearanceRecord(parsed.sessionColors, isSessionColorId),
    }
  } catch {
    return PLUS_INIT
  }
}

let plusState: Plus = readPlus()
const plusListeners = new Set<() => void>()

function plusSubscribe(fn: () => void): () => void {
  plusListeners.add(fn)
  return () => { plusListeners.delete(fn) }
}

function setPlus(patch: Partial<Plus>): void {
  plusState = { ...plusState, ...patch }
  try { globalThis.localStorage?.setItem(PLUS_KEY, JSON.stringify(plusState)) } catch { /* quota */ }
  for (const fn of [...plusListeners]) fn()
}

/* ------------------------------------------------------------------ *
 * Locale: the shipped namespace already carries the shipped keys; we
 * only add the increment keys and fall back to the shipped t otherwise.
 * ------------------------------------------------------------------ */

const PICKED = [
  'groupBy.time',
  'timeBucket.pinned', 'timeBucket.today', 'timeBucket.yesterday', 'timeBucket.week', 'timeBucket.earlier',
  'statusTabs.label', 'statusTab.all', 'statusTab.running', 'statusTab.pending', 'statusTab.unread',
  'textSize.label', 'textSize.small', 'textSize.normal', 'textSize.large', 'viewOptions.showWorkspaceName',
  'empty.noMatches',
  'appearance.workspaceIcon', 'appearance.sessionColor',
  'appearance.icon.title', 'appearance.color.title', 'appearance.icon.hint', 'appearance.color.hint',
  'appearance.tab.emoji', 'appearance.tab.icon', 'appearance.search', 'appearance.noMatches',
  'appearance.reset', 'appearance.done', 'appearance.noColor',
  'appearance.group.work', 'appearance.group.tech', 'appearance.group.nature', 'appearance.group.life',
  'appearance.group.create', 'appearance.group.misc', 'appearance.group.animals', 'appearance.group.food',
  'appearance.group.fun', 'appearance.group.symbols',
  'appearance.color.red', 'appearance.color.orange', 'appearance.color.amber', 'appearance.color.green',
  'appearance.color.teal', 'appearance.color.blue', 'appearance.color.violet', 'appearance.color.pink',
  'appearance.color.gray',
]

function pick(dict: Dict): Dict {
  const out: Dict = {}
  for (const key of PICKED) {
    const value = dict[key]
    if (value !== undefined) out[key] = value
  }
  return out
}

// 'groupBy.flat' is intentionally not in PICKED: it is used only as a probe
// to learn which language the shipped namespace is rendering in.
const SHIPPED_FLAT: Record<string, string> = {
  zh: '单列表', en: 'In one list', ja: '単一リスト', es: 'En una lista', fr: 'Liste unique',
  de: 'In einer Liste', ru: 'Одним списком', pt: 'Em uma lista',
}
const DICT_BY_LANG: Record<string, Dict> = {
  zh: pick(zh as Dict), en: pick(en as Dict), ja: pick(ja as Dict), es: pick(es as Dict),
  fr: pick(fr as Dict), de: pick(de as Dict), ru: pick(ru as Dict), pt: pick(pt as Dict),
}
const LANG_BY_FLAT = new Map<string, Dict>(Object.entries(SHIPPED_FLAT).map(([lang, flat]) => [flat, DICT_BY_LANG[lang]]))

type Translate = (key: string, params?: Record<string, unknown>) => string

/**
 * Layer this plugin's dictionaries over the shipped translator. The shipped
 * namespace renders in the same language as ours but carries none of our keys,
 * so each lookup tries our dictionary first and falls back to the shipped one.
 * @param shipped - translator bound to the shipped namespace.
 * @returns a translator for the increment keys that never throws on a miss.
 */
function translateFor(shipped: Translate): Translate {
  let dict: Dict = DICT_BY_LANG.zh
  try {
    dict = LANG_BY_FLAT.get(shipped('groupBy.flat')) ?? DICT_BY_LANG.zh
  } catch {
    dict = DICT_BY_LANG.zh
  }
  return (key: string, params?: Record<string, unknown>): string => {
    const local = dict[key]
    if (local !== undefined) return local
    try { return shipped(key, params) } catch { return key }
  }
}

function useCompositeT(shipped: Translate): Translate {
  return React.useMemo(() => translateFor(shipped), [shipped])
}

/* ------------------------------------------------------------------ *
 * Menu contributions: the shipped Workspace and Session menus are the
 * entry points, so we append one row to each instead of owning menus.
 * ------------------------------------------------------------------ */

/** The open-state pair a Session row menu passes to its entries. */
type UseMenuOpenState = () => readonly [open: boolean, setOpen: (open: boolean) => void]

type SessionColorItemProps = {
  sessionId: string
  displayTitle: string
  useMenuOpenState: UseMenuOpenState
}

/** The palette glyph shared by the workspace and session menu rows. */
function PaletteIcon(): React.ReactElement {
  return React.createElement(AppearanceIcon, { spec: { kind: 'icon', value: 'palette' }, size: 16 })
}

/**
 * "Set color" row appended to the shipped Session menu. The menu is still the
 * shipped one; this row only requests the palette, dismissing first so the
 * dialog is not mounted inside a popover that is closing.
 * @param props - the row's Session identity and its menu's open state.
 */
function SessionColorMenuItem(props: SessionColorItemProps & { t: Translate }): React.ReactElement {
  const { sessionId, displayTitle, t, useMenuOpenState } = props
  const [, setMenuOpen] = useMenuOpenState()
  return React.createElement(MenuItemButton, {
    icon: React.createElement(PaletteIcon),
    onSelect: () => {
      setMenuOpen(false)
      requestAppearance({ kind: 'session-color', sessionId, displayTitle })
    },
  }, t('appearance.sessionColor'))
}

/* ------------------------------------------------------------------ *
 * The seat component.
 * ------------------------------------------------------------------ */

type AnyProps = Record<string, unknown> & {
  useStore: <S>(sel: (s: Record<string, unknown>) => S, eq?: (a: S, b: S) => boolean) => S
  actions: Record<string, (...args: never[]) => void>
  t: Translate
}

/** A selector hook over a snapshot that the owner component re-publishes every render. */
function makeSelectorHook(
  snapRef: { current: Record<string, unknown> },
  hub: { listeners: Set<() => void> },
): AnyProps['useStore'] {
  const subscribe = (fn: () => void): (() => void) => {
    hub.listeners.add(fn)
    return () => { hub.listeners.delete(fn) }
  }
  return function useStore<S>(sel: (s: Record<string, unknown>) => S, eq?: (a: S, b: S) => boolean): S {
    const cache = React.useRef<{ value: S } | undefined>(undefined)
    const get = (): S => {
      const next = sel(snapRef.current)
      const prev = cache.current
      if (prev !== undefined && (prev.value === next || (eq !== undefined && eq(prev.value, next)))) return prev.value
      cache.current = { value: next }
      return next
    }
    return React.useSyncExternalStore(subscribe, get)
  }
}

interface BoundaryState { failed: boolean }

class SeatBoundary extends React.Component<{ fallback: React.ReactNode; children: React.ReactNode }, BoundaryState> {
  state: BoundaryState = { failed: false }

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true }
  }

  componentDidCatch(error: unknown): void {
    try { console.error('[dsh-sidebar-view] seat crashed; falling back to the shipped browser', error) } catch { /* noop */ }
  }

  render(): React.ReactNode {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function Seat(props: AnyProps & { Shipped: React.ComponentType<AnyProps> }): React.ReactElement {
  const { Shipped, ...rest } = props
  // Subscribe to the shipped store as a whole: its writes (group expansion,
  // manual order, archive filter, service-driven pinning) all land here.
  const shippedState = rest.useStore(state => state)
  const plus = React.useSyncExternalStore(plusSubscribe, () => plusState)
  const snapshot = React.useMemo(() => ({
    ...shippedState,
    groupBy: plus.timeMode ? 'time' : shippedState['groupBy'],
    statusFilter: plus.statusFilter,
    timeBucketExpansion: plus.timeBucketExpansion,
    textScale: plus.textScale,
    showWorkspaceName: plus.showWorkspaceName,
    workspaceIcons: plus.workspaceIcons,
    sessionColors: plus.sessionColors,
  }), [shippedState, plus])
  const snapRef = React.useRef(snapshot)
  snapRef.current = snapshot
  const hub = React.useRef({ listeners: new Set<() => void>() }).current
  React.useEffect(() => { for (const fn of [...hub.listeners]) fn() }, [hub, snapshot])
  const useStore = React.useMemo(() => makeSelectorHook(snapRef, hub), [hub, snapRef])
  const shippedActions = rest.actions
  const actions = React.useMemo(() => ({
    ...shippedActions,
    setGroupBy: (mode: string): void => {
      if (mode === 'time') {
        setPlus({ timeMode: true })
        return
      }
      if (plusState.timeMode) setPlus({ timeMode: false })
      shippedActions['setGroupBy']?.(mode as never)
    },
    setStatusFilter: (filter: string): void => setPlus({ statusFilter: filter }),
    setTimeBucketExpanded: (key: string, expanded: boolean): void => {
      setPlus({ timeBucketExpansion: { ...plusState.timeBucketExpansion, [key]: expanded } })
    },
    setTextScale: (scale: TextScale): void => setPlus({ textScale: scale }),
    setShowWorkspaceName: (show: boolean): void => setPlus({ showWorkspaceName: show }),
    setWorkspaceIcon: (workspaceId: string, spec: string | null): void => {
      const next = { ...plusState.workspaceIcons }
      if (spec === null) delete next[workspaceId]
      else next[workspaceId] = spec
      setPlus({ workspaceIcons: next })
    },
    setSessionColor: (sessionId: string, color: string | null): void => {
      const next = { ...plusState.sessionColors }
      if (color === null) delete next[sessionId]
      else next[sessionId] = color
      setPlus({ sessionColors: next })
    },
  }), [shippedActions])
  const t = useCompositeT(rest.t)
  return React.createElement(WorkspaceBrowser as unknown as React.ComponentType<Record<string, unknown>>, {
    ...rest,
    useStore,
    actions,
    t,
  })
}

/* ------------------------------------------------------------------ *
 * apply: swap the live entry's component; restore on dispose.
 * ------------------------------------------------------------------ */

export function apply(ctx: AnyCtx): void {
  const slots = ctx.get('slots') as Slots | undefined
  if (slots === undefined) {
    console.info('[dsh-sidebar-view] slots service unavailable; leaving the shipped sidebar in place')
    return
  }
  const seated = new Map<SlotEntry, unknown>()
  const locale = ctx.get('locale') as LocaleService | undefined
  const contextMenus = ctx.get('contextMenus') as ContextMenus | undefined
  let t: Translate = translateFor(() => { throw new Error('shipped locale unavailable') })
  try {
    if (locale !== undefined) t = translateFor(locale.bind('workspace'))
  } catch { /* keep the built-in dictionary when the namespace is not registered yet */ }

  // The Workspace "..." menu is built by the shipped package, so we add one row
  // to it (and its icon into the shared icon slot) instead of owning a menu.
  if (contextMenus !== undefined) {
    ctx.effect(() => contextMenus.register({
      id: 'workspace.appearance', target: 'workspace', order: 150,
      resolve: ({ workspaceId, displayTitle }) => [{
        id: 'icon',
        label: t('appearance.workspaceIcon'),
        icon: { key: 'workspace.appearance' },
        run: () => { requestAppearance({ kind: 'workspace-icon', workspaceId, displayTitle }) },
      }],
    }), 'dsh-sidebar-view: workspace icon menu action')
  }
  try {
    slots.inject('contextMenu.icon', () => slots.register(
      { name: 'contextMenu.icon', key: 'workspace.appearance' }, PaletteIcon,
    ))
  } catch (error) {
    console.warn('[dsh-sidebar-view] shipped context-menu icon slot unavailable', error)
  }
  // The Session menu takes plain React entries; ours renders the shipped
  // MenuItemButton so it inherits the menu's row metrics and focus handling.
  try {
    slots.inject('sidebar.workspaces.session.menu.item', () => slots.register(
      { name: 'sidebar.workspaces.session.menu.item', id: 'dsh-sidebar-view-session-color', order: 250 },
      (props: SessionColorItemProps) => React.createElement(SessionColorMenuItem, { ...props, t }),
    ))
  } catch (error) {
    console.warn('[dsh-sidebar-view] shipped session menu slot unavailable', error)
  }

  const forceRerender = (): void => {
    try {
      const off = slots.register({ name: SLOT, id: 'dsh-sidebar-view-repaint', priority: 9999 }, () => null)
      off()
    } catch { /* a repaint is best-effort; the next render picks the swap up anyway */ }
  }

  const seat = (): void => {
    const entry = slots.entries(SLOT)[0]
    if (entry === undefined || seated.has(entry)) return
    const Shipped = entry.component as React.ComponentType<AnyProps>
    if (typeof Shipped !== 'function') return
    const Seated = (props: AnyProps): React.ReactElement =>
      React.createElement(SeatBoundary, { fallback: React.createElement(Shipped, props) },
        React.createElement(Seat, { ...props, Shipped }))
    seated.set(entry, Shipped)
    entry.component = Seated
    forceRerender()
  }

  seat()
  const timer = setTimeout(() => { seat() }, 1200)
  ctx.effect(() => slots.subscribe(SLOT, () => { seat() }), 'dsh-sidebar-view: seat watcher')
  ctx.effect(() => () => {
    clearTimeout(timer)
    for (const [entry, Shipped] of seated) entry.component = Shipped
    seated.clear()
  }, 'dsh-sidebar-view: restore shipped component')
}
