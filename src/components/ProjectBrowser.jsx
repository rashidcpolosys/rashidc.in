'use client'

import { useState } from 'react'
import Paginated from './Paginated'

/** Region filters. "UAE & GCC" also covers GCC-wide products. */
const FILTERS = [
  { id: 'all', label: 'All', matches: () => true },
  { id: 'uae', label: 'UAE & GCC', matches: (r) => r === 'UAE' || r === 'GCC' },
  { id: 'usa', label: 'USA', matches: (r) => r === 'USA' },
  { id: 'india', label: 'India', matches: (r) => r === 'India' },
  { id: 'personal', label: 'Personal', matches: (r) => r === 'Personal' },
]

/** Receives server-rendered cards with their region, and filters them in the browser. */
const ProjectBrowser = ({ cards }) => {
  const [filter, setFilter] = useState('all')
  const active = FILTERS.find((f) => f.id === filter)
  const visible = cards.filter(({ region }) => active.matches(region))

  return (
    <>
      <div
        role='group'
        aria-label='Filter projects by region'
        className='flex flex-wrap gap-2 mb-6'
      >
        {FILTERS.map(({ id, label, matches }) => {
          const count = cards.filter(({ region }) => matches(region)).length
          const isActive = id === filter

          return (
            <button
              key={id}
              type='button'
              onClick={() => setFilter(id)}
              aria-pressed={isActive}
              className={`h-9 px-3.5 rounded-lg text-sm active:scale-95 touch-manipulation transition-[background-color,transform] ${
                isActive
                  ? 'bg-sky-400 text-zinc-950'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
              }`}
            >
              {label}
              <span className={isActive ? 'ml-1.5 text-zinc-800' : 'ml-1.5 text-zinc-500'}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* A new key restarts at page 1 whenever the filter changes. */}
      <Paginated
        key={filter}
        perPage={4}
        label='Projects'
        gridClassName='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'
      >
        {visible.map(({ key, card }) => (
          <div key={key} className='contents'>
            {card}
          </div>
        ))}
      </Paginated>
    </>
  )
}

export default ProjectBrowser
