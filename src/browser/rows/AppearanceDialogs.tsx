/**
 * The two appearance pickers. They live inside the sidebar browser (not
 * shell.overlay) because the browser owns the composite locale seat and the
 * appearance actions; the client half only opens them through the request
 * store. Every pick applies immediately — the modal stays open so the effect
 * is visible on the rows behind it.
 */
import * as React from 'react'
import { Button, IconFolderOpenRegular, Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import clsx from 'clsx'
import {
  EMOJI_GROUPS, ICON_GROUPS, SESSION_COLORS, formatIconSpec, parseIconSpec, searchIcons, sessionColorHex,
  type IconSpec,
} from '../appearance.ts'
import { AppearanceIcon } from '../appearance-icon.tsx'
import {
  getAppearanceRequest, requestAppearance, subscribeAppearanceRequest, type AppearanceRequest,
} from '../appearance-request.ts'
import css from './AppearanceDialogs.module.css'

type Translate = (key: string, params?: Record<string, unknown>) => string

/** Everything the pickers read and write; the browser root owns all of it. */
export interface AppearanceDialogsProps {
  t: Translate
  workspaceIcons: Readonly<Record<string, string>>
  sessionColors: Readonly<Record<string, string>>
  onWorkspaceIcon: (workspaceId: string, spec: string | null) => void
  onSessionColor: (sessionId: string, color: string | null) => void
}

/**
 * @param props.t - the browser root's composite locale seat.
 * @param props.workspaceIcons - stored icon specs by Workspace id.
 * @param props.sessionColors - stored palette ids by Session id.
 * @param props.onWorkspaceIcon - write hop (null restores the folder glyph).
 * @param props.onSessionColor - write hop (null clears the accent).
 * @returns the picker the request store names, or null.
 */
export function AppearanceDialogs(props: AppearanceDialogsProps) {
  const request = React.useSyncExternalStore(subscribeAppearanceRequest, getAppearanceRequest)
  if (request === null) return null
  const close = (): void => { requestAppearance(null) }
  return request.kind === 'workspace-icon'
    ? <WorkspaceIconDialog key={request.workspaceId} request={request} close={close} {...props} />
    : <SessionColorDialog key={request.sessionId} request={request} close={close} {...props} />
}

/** The open dialog's shell: title, one scrolling surface, and the footer pair. */
function PickerModal({ title, close, t, footer, children }: {
  title: string
  close: () => void
  t: Translate
  footer: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Modal open onClose={close} closeLabel={t('close')} title={title} footer={footer}>
      <div className={css.body}>{children}</div>
    </Modal>
  )
}

/** Workspace identity row shared by both pickers. */
function Preview({ title, hint, glyph }: { title: string; hint: string; glyph: React.ReactNode }) {
  return (
    <div className={css.preview}>
      <span className={css.previewGlyph}>{glyph}</span>
      <span className={css.previewText}>
        <span className={css.previewTitle}>{title}</span>
        <span className={css.previewHint}>{hint}</span>
      </span>
    </div>
  )
}

/**
 * Emoji-or-icon picker for one Workspace. The tab is owned here so switching
 * between the faces keeps the current choice visible in the preview.
 */
function WorkspaceIconDialog({ request, close, t, workspaceIcons, onWorkspaceIcon }: {
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
    <PickerModal
      title={t('appearance.icon.title')}
      close={close}
      t={t}
      footer={(
        <>
          <Button variant="outline" onClick={() => { onWorkspaceIcon(request.workspaceId, null) }}>{t('appearance.reset')}</Button>
          <Button variant="primary" onClick={close}>{t('appearance.done')}</Button>
        </>
      )}
    >
      <Preview
        title={request.displayTitle}
        hint={t('appearance.icon.hint')}
        glyph={current === null ? <IconFolderOpenRegular size={20} /> : <AppearanceIcon spec={current} size={24} />}
      />
      <div className={css.faceRow} role="group" aria-label={t('appearance.icon.title')}>
        <div className={css.tabs}>
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
            onChange={(e) => { setQuery(e.target.value) }}
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
    </PickerModal>
  )
}

/**
 * Nine-hue palette for one Session. The accent shows as the row's leading dot,
 * so the preview repeats that dot rather than a title swatch.
 */
function SessionColorDialog({ request, close, t, sessionColors, onSessionColor }: {
  request: Extract<AppearanceRequest, { kind: 'session-color' }>
  close: () => void
  t: Translate
  sessionColors: Readonly<Record<string, string>>
  onSessionColor: AppearanceDialogsProps['onSessionColor']
}) {
  const current = sessionColors[request.sessionId]
  const hex = sessionColorHex(current)
  return (
    <PickerModal
      title={t('appearance.color.title')}
      close={close}
      t={t}
      footer={<Button variant="primary" onClick={close}>{t('appearance.done')}</Button>}
    >
      <Preview
        title={request.displayTitle}
        hint={t('appearance.color.hint')}
        glyph={hex === undefined
          ? <span className={css.plainDot} aria-hidden />
          : <span className={css.previewDot} style={{ backgroundColor: hex }} aria-hidden />}
      />
      <div className={css.colorGrid}>
        {SESSION_COLORS.map(color => {
          const on = current === color.id
          const label = t('appearance.color.' + color.id)
          return (
            <button
              key={color.id}
              type="button"
              className={clsx(css.colorCell, on && css.colorCellOn)}
              aria-pressed={on}
              aria-label={label}
              title={label}
              onClick={() => { onSessionColor(request.sessionId, color.id) }}
            >
              <span className={css.swatch} style={{ backgroundColor: color.hex }} aria-hidden />
              <span className={css.colorName}>{label}</span>
              {on && <span className={css.check} aria-hidden>✓</span>}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        className={clsx(css.clearCell, hex === undefined && css.clearCellOn)}
        aria-pressed={hex === undefined}
        onClick={() => { onSessionColor(request.sessionId, null) }}
      >
        {t('appearance.noColor')}
      </button>
    </PickerModal>
  )
}
