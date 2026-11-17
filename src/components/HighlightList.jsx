'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// How many highlights show before "Show more": fewer on phones.
const VISIBLE_MOBILE = 1
const VISIBLE_DESKTOP = 3

/** Every highlight stays in the HTML for search engines; the extras are only hidden with CSS. */
const HighlightList = ({ items }) => {
  const [expanded, setExpanded] = useState(false)
  const moreMobile = items.length - VISIBLE_MOBILE
  const moreDesktop = items.length - VISIBLE_DESKTOP

  const itemClass = (index) => {
    if (expanded || index < VISIBLE_MOBILE) return 'flex'
    if (index < VISIBLE_DESKTOP) return 'hidden sm:flex'
    return 'hidden'
  }

  // The button shows on phones whenever anything is hidden there, and on
  // larger screens only when the role has more than VISIBLE_DESKTOP points.
  const buttonVisibility =
    moreDesktop > 0 ? 'inline-flex' : moreMobile > 0 ? 'inline-flex sm:hidden' : 'hidden'

  return (
    <>
      <ul className='mt-3 sm:mt-4 space-y-2'>
        {items.map((item, index) => (
          <li
            key={item}
            className={`text-sm md:text-base text-zinc-600 dark:text-zinc-300 gap-2 ${itemClass(index)}`}
          >
            <span
              className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0'
              aria-hidden='true'
            ></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {moreMobile > 0 && (
        <button
          type='button'
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className={`mt-2 sm:mt-3 text-sm text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors items-center gap-1 ${buttonVisibility}`}
        >
          {expanded ? (
            'Show less'
          ) : (
            <>
              <span className='sm:hidden'>Show {moreMobile} more</span>
              <span className='hidden sm:inline'>Show {moreDesktop} more</span>
            </>
          )}
          <ChevronDown
            size={18}
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
            aria-hidden='true'
          />
        </button>
      )}
    </>
  )
}

export default HighlightList
