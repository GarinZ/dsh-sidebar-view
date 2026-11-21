/**
 * The two appearance pickers. They render as small popovers pinned beside the
 * row that opened them — not as a window-covering modal — so the change is
 * visible on the rows around it while you pick. They live inside the sidebar
 * browser (not shell.overlay) because the browser owns the composite locale
 * seat and the appearance actions; the client half only opens them through the
 * request store.
 */
import * as React from 'react'
import { createPortal } from 'react-dom'
import { IconFolderOpenRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import clsx from 'clsx'
import {
  EMOJI_GROUPS, ICON_GROUPS, MAX_TAG_NAME, SESSION_COLORS, formatIconSpec, parseIconSpec, searchIcons,
  sessionColorHex, type IconSpec, type SessionColorId, type TagDefinition,
} from '../appearance.ts'
import { AppearanceIcon } from '../appearance-icon.tsx'
import {
  getAppearanceRequest, requestAppearance, subscribeAppearanceRequest, type AppearanceRequest,
} from '../appearance-request.ts'
import css from './AppearanceDialogs.module.css'

type Translate = (key: string, params?: Record<string, unknown>) => string

/** Distance from the anchor row, and from the viewport edges. */
const ANCHOR_GAP = 6
const VIEWPORT_MARGIN = 8

/** Everything the pickers read and write; the browser root owns all of it. */
export interface AppearanceDialogsProps {
  t: Translate
  workspaceIcons: Readonly<Record<string, string>>
  tags: readonly TagDefinition[]
  sessionTags: Readonly<Record<string, string>>
  onWorkspaceIcon: (workspaceId: string, spec: string | null) => void
  /** Assign (or clear) the Session's tag. */
  onAssignTag: (sessionId: string, tagId: string | null) => void
  /** Create a named tag and assign it to the Session. */
  onCreateTag: (sessionId: string, name: string, color: string) => void
  /** Rename or recolor an existing tag; every Session wearing it follows. */
  onUpdateTag: (tagId: string, name: string, color: string) => void
}

/**
 * @param props.t - the browser root's composite locale seat.
 * @param props.workspaceIcons - stored icon specs by Workspace id.
 * @param props.tags - the named color tags in picker order.
 * @param props.sessionTags - stored tag ids by Session id.
 * @param props.onWorkspaceIcon - write hop (null restores the folder glyph).
 * @param props.onAssignTag - write hop (null untags the Session).
 * @param props.onCreateTag - write hop that adds a tag and wears it.
 * @param props.onUpdateTag - write hop for the tag being edited.
 * @returns the popover the request store names, or null.
 */
export function AppearanceDialogs(props: AppearanceDialogsProps) {
  const request = React.useSyncExternalStore(subscribeAppearanceRequest, getAppearanceRequest)
  if (request === null) return null
  const close = (): void => { requestAppearance(null) }
  return request.kind === 'workspace-icon'
    ? <WorkspaceIconPicker key={request.workspaceId} request={request} close={close} {...props} />
    : <SessionTagPicker key={request.sessionId} request={request} close={close} {...props} />
}

/**
 * The row the panel sits beside. Its key mirrors the entity in the request, so
 * the panel can follow the row when the list scrolls instead of guessing from
 * a rect sampled once at open time.
 */
function rowKeyOf(request: AppearanceRequest): string {
  return request.kind === 'workspace-icon' ? `workspace:${request.workspaceId}` : `session:${request.sessionId}`
}

/**
 * Name a tag wears in the picker and in the group header: its own name, or the
 * localized colour name for the unnamed tags the colour palette creates.
 */
function tagName(tag: TagDefinition, t: Translate): string {
  return tag.name.trim() === '' ? t('appearance.color.' + tag.color) : tag.name
}

/** @param key - the row's data-row-key. @returns its viewport rect, or null when unmounted. */
function rowRectOf(key: string): AppearanceAnchor | null {
  const row = document.querySelector(`[data-row-key="${CSS.escape(key)}"]`)
  if (row === null) return null
  const rect = row.getBoundingClientRect()
  return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom }
}

/**
 * A fixed panel beside the anchor row: kept inside the viewport, flipped to the
 * row's other side when the right edge would overflow, and re-placed whenever
 * the row moves (list scroll, hover-driven list scrolling) or its own height
 * changes (tab switches, search results). It closes when the row itself is gone
 * — not on scroll, because the host list does scroll on its own while the
 * pointer moves, which used to dismiss the panel for no visible reason.
 */
function PickerPopover({ request, title, close, children }: {
  request: AppearanceRequest
  title: string
  close: () => void
  children: React.ReactNode
}) {
  const panelRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState<{ left: number; top: number } | null>(null)
  const closeRef = React.useRef(close)
  closeRef.current = close
  const placeRef = React.useRef<() => void>(() => {})
  const rowKey = rowKeyOf(request)

  React.useLayoutEffect(() => {
    const panel = panelRef.current
    if (panel === null) return
    const place = (): void => {
      const width = panel.offsetWidth
      const height = panel.offsetHeight
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const live = rowRectOf(rowKey)
      if (live === null && request.anchor === undefined) {
        closeRef.current()
        return
      }
      const anchor = live ?? request.anchor
      let left = anchor === undefined ? viewportWidth / 2 - width / 2 : anchor.right + ANCHOR_GAP
      let top = anchor === undefined ? viewportHeight / 3 : anchor.top
      if (left + width > viewportWidth - VIEWPORT_MARGIN) {
        left = anchor === undefined ? viewportWidth - width - VIEWPORT_MARGIN : anchor.left - ANCHOR_GAP - width
      }
      left = Math.max(VIEWPORT_MARGIN, Math.min(left, viewportWidth - width - VIEWPORT_MARGIN))
      top = Math.max(VIEWPORT_MARGIN, Math.min(top, viewportHeight - height - VIEWPORT_MARGIN))
      setPosition((previous) => previous !== null && previous.left === left && previous.top === top ? previous : { left, top })
    }
    placeRef.current = place
    place()
    const observer = new ResizeObserver(place)
    observer.observe(panel)
    return () => { observer.disconnect() }
  }, [request, rowKey])

  React.useEffect(() => {
    panelRef.current?.focus()
    const onPointerDown = (event: PointerEvent): void => {
      if (panelRef.current?.contains(event.target as Node) === true) return
      closeRef.current()
    }
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      closeRef.current()
    }
    // Reposition synchronously: the row's marquee scrolls its title on hover,
    // and animation frames can be throttled in background windows, so a frame
    // callback would keep the panel pinned to the row's old rect.
    const onScroll = (): void => { placeRef.current() }
    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('keydown', onKeyDown, true)
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onScroll)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return createPortal(
    <div
      ref={panelRef}
      role="dialog"
      aria-label={title}
      tabIndex={-1}
      className={css.panel}
      style={{
        left: position?.left ?? 0,
        top: position?.top ?? 0,
        visibility: position === null ? 'hidden' : 'visible',
      }}
    >
      {children}
    </div>,
    document.body,
  )
}

/** Title plus the entity the picker edits, clamped to one line each. */
function Head({ title, scope }: { title: string; scope: string }) {
  return (
    <header className={css.head}>
      <span className={css.headTitle}>{title}</span>
      <span className={css.headScope} title={scope}>{scope}</span>
    </header>
  )
}

/**
 * Emoji-or-icon picker for one Workspace. Applying a pick keeps the popover
 * open so the row behind it can be compared against the next candidate.
 */
function WorkspaceIconPicker({ request, close, t, workspaceIcons, onWorkspaceIcon }: {
  request: Extract<AppearanceRequest, { kind: 'workspace-icon' }>
  close: () => void
  t: Translate
  workspaceIcons: Readonly<Record<string, string>>
  onWorkspaceIcon: AppearanceDialogsProps['onWorkspaceIcon']
}) {
  const [face, setFace] = React.useState<'emoji' | 'icon'>('emoji')
  const [query, setQuery] = React.useState('')
  const current = parseIconSpec(workspaceIcons[request.workspaceId])
  const pick = (spec: IconSpec): void => { onWorkspaceIcon(request.workspaceId, formatIconSpec(spec)) }
  const matches = query.trim() === '' ? null : searchIcons(query)
  return (
    <PickerPopover request={request} title={t('appearance.icon.title')} close={close}>
      <Head title={t('appearance.icon.title')} scope={request.displayTitle} />
      <div className={css.toolbar}>
        <div className={css.tabs} role="group" aria-label={t('appearance.icon.title')}>
          <button type="button" aria-pressed={face === 'emoji'} className={clsx(css.tab, face === 'emoji' && css.tabOn)} onClick={() => { setFace('emoji') }}>
            {t('appearance.tab.emoji')}
          </button>
          <button type="button" aria-pressed={face === 'icon'} className={clsx(css.tab, face === 'icon' && css.tabOn)} onClick={() => { setFace('icon') }}>
            {t('appearance.tab.icon')}
          </button>
        </div>
        {face === 'icon' && (
          <input
            className={css.search}
            value={query}
            placeholder={t('appearance.search')}
            aria-label={t('appearance.search')}
            onChange={(event) => { setQuery(event.target.value) }}
          />
        )}
      </div>
      <div className={css.scroll}>
        {face === 'emoji' && EMOJI_GROUPS.map(group => (
          <section key={group.id}>
            <h3 className={css.groupLabel}>{t('appearance.group.' + group.id)}</h3>
            <div className={css.grid}>
              {group.emojis.map(emoji => {
                const on = current?.kind === 'emoji' && current.value === emoji
                return (
                  <button
                    key={emoji}
                    type="button"
                    className={clsx(css.cell, on && css.cellOn)}
                    aria-pressed={on}
                    aria-label={emoji}
                    onClick={() => { pick({ kind: 'emoji', value: emoji }) }}
                  >
                    {emoji}
                  </button>
                )
              })}
            </div>
          </section>
        ))}
        {face === 'icon' && matches !== null && (
          <section>
            {matches.length === 0
              ? <div className={css.empty}>{t('appearance.noMatches')}</div>
              : (
                <div className={css.grid}>
                  {matches.map(name => {
                    const on = current?.kind === 'icon' && current.value === name
                    return (
                      <button
                        key={name}
                        type="button"
                        className={clsx(css.cell, on && css.cellOn)}
                        aria-pressed={on}
                        aria-label={name}
                        title={name}
                        onClick={() => { pick({ kind: 'icon', value: name }) }}
                      >
                        <AppearanceIcon spec={{ kind: 'icon', value: name }} size={18} />
                      </button>
                    )
                  })}
                </div>
              )}
          </section>
        )}
        {face === 'icon' && matches === null && ICON_GROUPS.map(group => (
          <section key={group.id}>
            <h3 className={css.groupLabel}>{t('appearance.group.' + group.id)}</h3>
            <div className={css.grid}>
              {group.icons.map(name => {
                const on = current?.kind === 'icon' && current.value === name
                return (
                  <button
                    key={name}
                    type="button"
                    className={clsx(css.cell, on && css.cellOn)}
                    aria-pressed={on}
                    aria-label={name}
                    title={name}
                    onClick={() => { pick({ kind: 'icon', value: name }) }}
                  >
                    <AppearanceIcon spec={{ kind: 'icon', value: name }} size={18} />
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
      <footer className={css.footer}>
        <button type="button" className={css.textButton} onClick={() => { onWorkspaceIcon(request.workspaceId, null) }}>
          {t('appearance.reset')}
        </button>
        <span className={css.currentGlyph} aria-hidden>
          {current === null ? <IconFolderOpenRegular size={14} /> : <AppearanceIcon spec={current} size={14} />}
        </span>
        <button type="button" className={css.primaryButton} onClick={close}>{t('appearance.done')}</button>
      </footer>
    </PickerPopover>
  )
}

/**
 * Named colour tags for one Session. Picking a tag applies it and dismisses;
 * the editor below renames or recolours the tag the Session already wears, so
 * the row behind the popover updates as you type. The palette only stages a
 * colour while a new tag is being created.
 */
function SessionTagPicker({ request, close, t, tags, sessionTags, onAssignTag, onCreateTag, onUpdateTag }: {
  request: Extract<AppearanceRequest, { kind: 'session-tag' }>
  close: () => void
  t: Translate
  tags: readonly TagDefinition[]
  sessionTags: Readonly<Record<string, string>>
  onAssignTag: AppearanceDialogsProps['onAssignTag']
  onCreateTag: AppearanceDialogsProps['onCreateTag']
  onUpdateTag: AppearanceDialogsProps['onUpdateTag']
}) {
  const currentId = sessionTags[request.sessionId]
  const current = currentId === undefined ? undefined : tags.find(tag => tag.id === currentId)
  const [mode, setMode] = React.useState<'edit' | 'create'>(current === undefined ? 'create' : 'edit')
  const [name, setName] = React.useState(current?.name ?? '')
  const [color, setColor] = React.useState<SessionColorId>(current?.color ?? 'blue')
  const editing = mode === 'edit' && current !== undefined

  const assign = (tag: TagDefinition): void => {
    onAssignTag(request.sessionId, tag.id)
    close()
  }
  const startCreate = (): void => {
    setMode('create')
    setName('')
  }
  const pickColor = (id: SessionColorId): void => {
    setColor(id)
    // Recolouring the tag the Session already wears is a live edit: every row
    // in that group follows at once.
    if (current !== undefined && mode === 'edit') onUpdateTag(current.id, current.name, id)
  }
  const commit = (): void => {
    const trimmed = name.trim()
    if (current !== undefined && mode === 'edit') onUpdateTag(current.id, trimmed, color)
    else onCreateTag(request.sessionId, trimmed, color)
    close()
  }
  const clear = (): void => {
    onAssignTag(request.sessionId, null)
    close()
  }

  return (
    <PickerPopover request={request} title={t('appearance.color.title')} close={close}>
      <Head title={t('appearance.color.title')} scope={request.displayTitle} />
      {tags.length > 0 && (
        <div className={css.tagList} role="group" aria-label={t('appearance.color.title')}>
          {tags.map(tag => {
            const on = tag.id === currentId
            return (
              <button
                key={tag.id}
                type="button"
                className={clsx(css.tagChip, on && css.tagChipOn)}
                aria-pressed={on}
                title={tagName(tag, t)}
                onClick={() => { assign(tag) }}
              >
                <span className={css.tagChipDot} style={{ backgroundColor: sessionColorHex(tag.color) }} aria-hidden />
                <span className={css.tagChipLabel}>{tagName(tag, t)}</span>
              </button>
            )
          })}
          {editing && (
            <button type="button" className={css.tagChip} onClick={startCreate}>
              + {t('appearance.tag.new')}
            </button>
          )}
        </div>
      )}
      <div className={css.swatches}>
        {SESSION_COLORS.map(option => {
          const on = color === option.id
          const label = t('appearance.color.' + option.id)
          return (
            <button
              key={option.id}
              type="button"
              className={clsx(css.swatchButton, on && css.swatchOn)}
              aria-pressed={on}
              aria-label={label}
              title={label}
              onClick={() => { pickColor(option.id) }}
            >
              <span className={css.swatch} style={{ backgroundColor: option.hex }} aria-hidden />
            </button>
          )
        })}
      </div>
      <label className={css.nameRow}>
        <span className={css.nameLabel}>{t('appearance.tag.name')}</span>
        <input
          className={css.nameInput}
          value={name}
          maxLength={MAX_TAG_NAME}
          placeholder={t('appearance.tag.placeholder')}
          aria-label={t('appearance.tag.name')}
          onChange={event => { setName(event.currentTarget.value) }}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              event.preventDefault()
              commit()
            }
          }}
        />
      </label>
      <footer className={css.footer}>
        <button type="button" className={css.textButton} onClick={clear}>
          {t('appearance.noColor')}
        </button>
        <span className={css.currentGlyph} aria-hidden>
          <span className={css.swatch} style={{ backgroundColor: sessionColorHex(color) }} />
        </span>
        <button type="button" className={css.primaryButton} onClick={commit}>
          {editing ? t('appearance.tag.save') : t('appearance.tag.create')}
        </button>
      </footer>
    </PickerPopover>
  )
}

