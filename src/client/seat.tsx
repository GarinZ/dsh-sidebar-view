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
import { WorkspaceBrowser } from '../browser/rows/WorkspaceBrowser.tsx'
import { de, en, es, fr, ja, pt, ru, zh } from '../browser/locales.ts'

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
type Slots = {
  entries(name: string): SlotEntry[]
  subscribe(name: string, fn: () => void): () => void
  register(options: Record<string, unknown>, component: unknown): () => void
}
type AnyCtx = { get(name: string): unknown; effect(fn: () => () => void, label: string): void }

/* ------------------------------------------------------------------ *
 * Increment state: the fields the shipped store does not know about.
 * The shipped store keeps owning groupBy/orderBy/groupExpansion/...,
 * so every write the shipped service makes stays visible to our UI.
 * ------------------------------------------------------------------ */

type Plus = { timeMode: boolean; statusFilter: string; timeBucketExpansion: Record<string, boolean> }

const PLUS_KEY = 'dsh.workspace.view.sidebar-view.v1'
const PLUS_INIT: Plus = { timeMode: false, statusFilter: 'all', timeBucketExpansion: {} }

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
  'empty.noMatches',
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

function useCompositeT(shipped: Translate): Translate {
  return React.useMemo(() => {
    let dict: Dict = DICT_BY_LANG.zh
    try {
      const probe = shipped('groupBy.flat')
      dict = LANG_BY_FLAT.get(probe) ?? DICT_BY_LANG.zh
    } catch {
      dict = DICT_BY_LANG.zh
    }
    return (key: string, params?: Record<string, unknown>): string => {
      const local = dict[key]
      return local !== undefined ? local : shipped(key, params)
    }
  }, [shipped])
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
