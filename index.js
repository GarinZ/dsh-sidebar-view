/**
 * dsh-sidebar-view — node half.
 *
 * Everything this plugin does lives in the browser: the client half occupies
 * the `sidebar.workspaces` slot and renders the browsing region itself. The
 * node row exists so the bundle patch has a plugin to load (and so the client
 * manifest is discovered), and it deliberately does nothing on the Host.
 */

export const name = 'dsh-sidebar-view'
export const inject = []

export function apply() {}
