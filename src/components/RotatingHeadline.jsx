'use client'

/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react'

const WORDS = ['ERP Platforms', 'SaaS Products', 'E‑commerce', 'Business Apps']

const HOLD_MS = 3000
const IN_STAGGER_MS = 35
const OUT_STAGGER_MS = 18
const IN_DELAY_MS = 180 // let the old word start leaving first

export function RotatingHeadline() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActive((i) => (i + 1) % WORDS.length)
      }
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [])

  const prev = (active - 1 + WORDS.length) % WORDS.length

  return (
    <p
      className='text-4xl sm:text-5xl md:text-[40px] lg:text-[55px] leading-tight lg:leading-[1.15] font-semibold mt-2 mb-4'
      aria-label='Building ERP platforms, SaaS products, e-commerce and business apps'
    >
      <span aria-hidden='true'>
        {/* The gradient clips to every glyph inside it, hidden ones too, so it
            wraps "Building" only and never the rotating words. */}
        <span className='headline-1 block md:text-[40px] lg:text-[55px]'>
          Building
        </span>
        {/* All words share one grid cell, so the line keeps the widest word's size */}
        <span className='grid max-w-max overflow-hidden pb-[0.12em] -mb-[0.12em]'>
          {WORDS.map((word, i) => {
            const isIn = i === active
            const isOut = i === prev
            return (
              <span
                key={word}
                className='[grid-area:1/1] whitespace-nowrap text-sky-500 dark:text-sky-400'
              >
                {[...word].map((char, j) => (
                  <span
                    key={j}
                    className={`inline-block will-change-transform motion-reduce:!translate-y-0 motion-reduce:!blur-0 ${
                      isIn
                        ? 'translate-y-0 opacity-100 blur-0 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
                        : isOut
                          ? '-translate-y-[60%] opacity-0 blur-[6px] duration-500 ease-[cubic-bezier(0.55,0,1,0.45)]'
                          : 'translate-y-[60%] opacity-0 blur-[6px] duration-0'
                    } transition-[opacity,transform,filter]`}
                    style={{
                      transitionDelay: isIn
                        ? `${IN_DELAY_MS + j * IN_STAGGER_MS}ms`
                        : isOut
                          ? `${j * OUT_STAGGER_MS}ms`
                          : '0ms',
                    }}
                  >
                    {char === ' ' ? ' ' : char}
                  </span>
                ))}
              </span>
            )
          })}
        </span>
      </span>
    </p>
  )
}
