# dsh-sidebar-view

[简体中文](README.md) | English

[![npm](https://img.shields.io/npm/v/dsh-sidebar-view)](https://www.npmjs.com/package/dsh-sidebar-view)
[![license](https://img.shields.io/npm/l/dsh-sidebar-view)](LICENSE)
[![DSH](https://img.shields.io/badge/DSH-0.2.2--rc.3-4f46e5)](https://github.com/deepseek-ai)

**Two things the DeepSeek Harness session list does not have: grouping by time, and filtering by status.**

When five or six sessions are open and you come back the next day, the shipped sidebar only stacks them by workspace, so you scroll until you recognize "the one that touched CI yesterday". This plugin adds a fourth grouping mode, by time, and a row of status tabs with live counts — pinned, today, yesterday, this week, earlier — so you can see what is running and what finished while you were away.

![Three views: the view-options menu, grouping by time, and the one-list view](https://raw.githubusercontent.com/GarinZ/dsh-sidebar-view/main/docs/screenshots/overview.png)

*① The new “By time” entry in View options　② Pinned → Today → Yesterday → This week, each header with a count and collapse　③ One list across projects, with the workspace name on every row*

## Features

- **Group by time**: a fourth entry in View options. Buckets are `Pinned → Today → Yesterday → This week (from Monday) → Earlier`; empty buckets disappear, and each header shows its count and collapses on click.
- **Flat across projects**: the time view ignores workspace boundaries, so sessions from every project share one timeline. Each row ends with its workspace name (`atlas-web`, `infra`, …) so you know where it came from without opening it.
- **Status tabs**: `All / Running / Awaiting / Unread` with live counts, sitting right under the section title. They apply to all four grouping modes (by workspace, workspace tree, one list, by time); groups and buckets that end up empty disappear.
- **Drag inside a bucket**: reorder rows in the time view, but only within the same bucket — dropping across buckets does nothing, because the bucket itself is decided by the last update time. The result is written back to the global manual order, so the one-list view reorders too.
- **Everything native still works**: search (local + host), context menus, rename, fork, pin, archive, manual sort, "show N more", add workspace, workspace menus, shortcuts, the collapsed 56 px rail — all delegated to the shipped implementation. The plugin only adds.

## What it solves

The shipped View options already covers by workspace, workspace tree, one list (flat), and hide-archived. What is missing is the time and status dimensions:

| Want | Shipped 0.2.2-rc.3 | This plugin |
| --- | --- | --- |
| Flat across projects | One list | Kept, plus a workspace name per row |
| Today / yesterday / this week | None | By time (fourth grouping mode) |
| All / running / awaiting / unread | None (archive filter only) | Status tabs with counts |
| Group by workspace | Yes | Kept |
| Pinned first | Yes | Kept, and its own bucket in the time view |

## Install

```bash
# From npm (once published)
dsh plugin --profile web add dsh-sidebar-view

# From GitHub (the repo ships the built client.js, no local build needed)
dsh plugin --profile web add git+https://github.com/GarinZ/dsh-sidebar-view.git

# Local development
dsh plugin --profile web add link:/path/to/dsh-sidebar-view
```

Restart the app to take effect. Uninstall:

```bash
dsh plugin --profile web remove dsh-sidebar-view
```

The plugin never patches shipped files and never writes user data; remove it and the sidebar is exactly the shipped one again.

> The desktop app runs the `desktop` profile (managed by Electron, so `--dump-config` is unavailable).
> To install there, replace `web` with `desktop` above, then quit and reopen the app.

## Compatibility

| Environment | Status |
| --- | --- |
| DeepSeek Harness `0.2.2-rc.3` · macOS desktop (`desktop` profile) | Verified |
| DeepSeek Harness `0.2.2-rc.3` · browser / `web` profile | Verified |
| Clean isolated profile with only this plugin | Verified: boots cleanly |
| DSH `0.3.x` | Untested; the port needs realigning with the new `dsh-client-ui-workspace` |

## Usage

Open **View options** (the slider icon at the top right of the sidebar):

- pick **By time** under Grouping;
- click **All / Running / Awaiting / Unread** under the title to filter;
- click a bucket header to collapse it; drag rows to reorder inside a bucket.

Status meanings:

- **Running**: the session is working (including a running subagent);
- **Awaiting**: a tool call is waiting for your confirmation;
- **Unread**: the turn finished in the background and you have not opened it yet — this is the shipped `completionUnread` flag, and it resets on reload.

The incremental state lives in `localStorage["dsh.workspace.view.sidebar-view.v1"]`; the shipped
`dsh.workspace.view.v5` key stays owned by the shipped store. Delete both to reset.

## How it works: seated on the shipped component, not replacing it

The whole "sessions / workspaces" area is one component registered on the single
`sidebar.workspaces` slot. This plugin does **not** disable
`@deepseek-ai/dsh-client-ui-workspace` and does not register any service:

1. after the shipped plugin registers, wrap that entry's `component` in an error boundary;
2. the wrapper reads the shipped store snapshot, overlays two fields (`statusFilter`, bucket
   collapse state), and passes the shipped props (including `renderSlot`) to the ported browser component;
3. if the wrapper throws, the boundary renders the shipped component; if the bundle never loads,
   the shipped component was never touched.

Row decorations and row actions injected by other plugins keep working, and the worst case is
"the new features are missing", not "the client cannot boot".

## Limitations

- Relies on an undocumented internal contract of `0.2.2-rc.3` (`StoredEntry.component` is replaceable). If upstream changes it, the plugin goes inert instead of crashing.
- Drag only reorders inside a bucket: a bucket is decided by update time, so there is no valid cross-bucket target.
- The workspace chip takes about 72 px, so long titles truncate earlier than in the shipped UI.
- In a pure `web` profile the "add workspace" popover needs `dsh-client-ui-directory-picker-browse`; it works in the desktop app.

## Development

```bash
npm install
node build.mjs     # writes client.js (~220 KB, CSS inlined)
```

The build assembles the bundle in memory, smoke-tests it in `node:vm` (asserting that
`__ModuleLoader__.load` registers this package), then writes a temp file and `rename`s it into
place, so the host watcher can never read a half-written bundle.

The port lives in `src/browser/` (forked from the client sources of
`dsh-client-ui-workspace`); the incremental edits are commented in `src/browser/tree.ts`,
`stores.ts`, `locales.ts`, `rows/Rows.tsx` and `rows/WorkspaceBrowser.tsx`. On a DSH upgrade,
re-copy `src/browser/` from the new sources and re-apply those edits.

MIT License