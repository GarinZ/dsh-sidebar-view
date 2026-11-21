/**
 * Cross-half request for the appearance pickers. The context-menu entries (set
 * by the client seat) write it; the sidebar browser (which owns the composite
 * locale seat and the appearance actions) renders the dialog it names.
 */

/** Which picker to open, and the entity whose appearance it edits. */
export type AppearanceRequest =
  | { readonly kind: 'workspace-icon'; readonly workspaceId: string; readonly displayTitle: string }
  | { readonly kind: 'session-color'; readonly sessionId: string; readonly displayTitle: string }

let current: AppearanceRequest | null = null
const listeners = new Set<() => void>()

/** @returns the pending request, or null when no picker is open. */
export function getAppearanceRequest(): AppearanceRequest | null {
  return current
}

/** @param fn - called after every request change. @returns the unsubscribe. */
export function subscribeAppearanceRequest(fn: () => void): () => void {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}

/** @param next - the picker to show, or null to close whatever is open. */
export function requestAppearance(next: AppearanceRequest | null): void {
  if (next === current) return
  current = next
  for (const fn of [...listeners]) fn()
}
