/**
 * dsh-sidebar-view — browser half entry.
 *
 * The plugin does not replace the shipped sidebar package: it keeps
 * `@deepseek-ai/dsh-client-ui-workspace` loaded (it stays the provider of the
 * `uiWorkspace` service and of every child-slot declaration) and swaps only the
 * component of its live `sidebar.workspaces` entry. Anything that goes wrong
 * renders the shipped component instead, so the worst case is the stock sidebar.
 *
 * `src/browser` holds the vendored browser (a fork of the shipped one) that
 * provides the extra view modes; the seat adapter in `./seat.tsx` feeds it the
 * shipped entry's props and store handle.
 */
export { apply, inject, name } from './seat.tsx'
