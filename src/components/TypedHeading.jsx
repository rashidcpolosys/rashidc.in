'use client'

/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import { useEffect, useRef, useState } from 'react'

const TYPE_MS = 65
const START_DELAY_MS = 300

/**
 * A heading that types itself out, keyboard style, whenever it scrolls
 * into view. The full text is laid out invisibly underneath, so the
 * heading has its final size from the start and nothing below it moves.
 */
export function TypedHeading({ text, className = '', textClassName = '' }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reduced motion: show the whole heading at once, no typing.
        if (reduced) {
          setCount(text.length)
          return
        }
        if (entry.isIntersecting) {
          // Typing starts every time the heading scrolls into view...
          setStarted(true)
        } else {
          // ...and resets once it leaves, ready to type again next visit.
          setStarted(false)
          setCount(0)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [text])

  useEffect(() => {
    if (!started || count >= text.length) return
    const id = setTimeout(
      () => setCount((c) => c + 1),
      count === 0 ? START_DELAY_MS : TYPE_MS
    )
    return () => clearTimeout(id)
  }, [started, count, text])

  const done = count >= text.length

  return (
    <h2 ref={ref} aria-label={text} className={className}>
      <span aria-hidden='true' className='grid'>
        <span className={`headline-1 invisible [grid-area:1/1] ${textClassName}`}>
          {text}
        </span>
        <span className='[grid-area:1/1]'>
          <span className={`headline-1 inline ${textClassName}`}>
            {text.slice(0, count)}
          </span>
          <span
            className={`inline-block w-[3px] h-[0.85em] ml-1 align-[-0.05em] rounded-full bg-sky-400 ${
              done ? 'caret-blink' : ''
            }`}
          />
        </span>
      </span>
    </h2>
  )
}
