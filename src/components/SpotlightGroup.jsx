'use client'

/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

/**
 * Tracks the pointer over any `[data-spotlight]` card inside it and exposes
 * the position as `--x` / `--y`, so CSS can draw a light that follows the
 * cursor. One listener for the whole grid, no re-renders.
 */
export function SpotlightGroup({ children, className = '' }) {
  const onPointerMove = (event) => {
    const card = event.target.closest('[data-spotlight]')
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <div className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  )
}
