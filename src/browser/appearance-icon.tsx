/** Inline renderer for the stored Workspace/Session appearance value. */
import { ICON_BODIES, type IconSpec } from './appearance.ts'

/**
 * An emoji as a text glyph or a Lucide body as an inherited-color SVG. The
 * wrapper keeps both kinds the same box so a row's leading cell never shifts
 * when the owner swaps one for the other.
 * @param props.spec - parsed stored choice.
 * @param props.size - the box edge in px; emoji glyphs run two px smaller.
 * @param props.className - optional wrapper class from the caller's stylesheet.
 * @returns the glyph.
 */
export function AppearanceIcon({ spec, size = 16, className }: {
  spec: IconSpec
  size?: number
  className?: string
}) {
  if (spec.kind === 'emoji') {
    return (
      <span
        className={className}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, fontSize: Math.max(11, size - 2), lineHeight: 1 }}
        aria-hidden
      >
        {spec.value}
      </span>
    )
  }
  const body = ICON_BODIES[spec.value] ?? ''
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', width: size, height: size, flex: 'none' }}
      aria-hidden
      dangerouslySetInnerHTML={{
        __html: '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" focusable="false" aria-hidden="true">' + body + '</svg>',
      }}
    />
  )
}
