'use client'

import { useMemo, useState } from 'react'
import Paginated from './Paginated'
import { SpotlightGroup } from './SpotlightGroup'

/** Region filters. "UAE & GCC" also covers GCC-wide products. */
const REGION_FILTERS = [
  { id: 'all', label: 'All', matches: () => true },
  { id: 'uae', label: 'UAE & GCC', matches: (r) => r === 'UAE' || r === 'GCC' },
  { id: 'usa', label: 'USA', matches: (r) => r === 'USA' },
  { id: 'india', label: 'India', matches: (r) => r === 'India' },
  { id: 'personal', label: 'Personal', matches: (r) => r === 'Personal' },
]

/** Tech tags to surface as quick filters. */
const TECH_FILTERS = [
  { id: 'all-tech', label: 'All tech' },
  { id: 'nextjs', label: 'Next.js', match: 'Next.js' },
  { id: 'django', label: 'Django', match: 'Django REST Framework' },
  { id: 'nestjs', label: 'NestJS', match: 'NestJS' },
  { id: 'postgresql', label: 'PostgreSQL', match: 'PostgreSQL' },
  { id: 'react', label: 'React', match: 'React' },
  { id: 'node', label: 'Node.js', match: 'Node.js' },
]

/**
 * Receives server-rendered cards with their region and tags,
 * and filters them by region and/or tech in the browser.
 */
const ProjectBrowser = ({ cards }) => {
  const [regionFilter, setRegionFilter] = useState('all')
  const [techFilter, setTechFilter] = useState('all-tech')

  const activeRegion = REGION_FILTERS.find((f) => f.id === regionFilter)
  const activeTech = TECH_FILTERS.find((f) => f.id === techFilter)

  const visible = useMemo(() => {
    return cards.filter(({ region, tags = [] }) => {
      const regionOk = activeRegion.matches(region)
      const techOk =
        activeTech.id === 'all-tech' ||
        tags.some((t) => t.toLowerCase().includes(activeTech.match?.toLowerCase() ?? ''))
      return regionOk && techOk
    })
  }, [cards, activeRegion, activeTech])

  const filterBtnClass = (isActive) =>
    `h-9 px-3.5 rounded-lg text-sm active:scale-95 touch-manipulation transition-[background-color,transform] ${
      isActive
        ? 'bg-sky-400 text-zinc-950'
        : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
    }`

  return (
    <>
      {/* Region filter */}
      <div
        role='group'
        aria-label='Filter projects by region'
        className='flex flex-wrap gap-2 mb-3'
      >
        {REGION_FILTERS.map(({ id, label, matches }) => {
          const count = cards.filter(({ region }) => matches(region)).length
          const isActive = id === regionFilter

          return (
            <button
              key={id}
              type='button'
              onClick={() => { setRegionFilter(id); setTechFilter('all-tech') }}
              aria-pressed={isActive}
              className={filterBtnClass(isActive)}
            >
              {label}
              <span className={isActive ? 'ml-1.5 text-zinc-700' : 'ml-1.5 text-zinc-500'}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Tech filter — hidden on mobile to keep the UI compact */}
      <div
        role='group'
        aria-label='Filter projects by technology'
        className='hidden sm:flex flex-wrap gap-2 mb-6'
      >
        {TECH_FILTERS.map(({ id, label }) => {
          const isActive = id === techFilter
          return (
            <button
              key={id}
              type='button'
              onClick={() => setTechFilter(id)}
              aria-pressed={isActive}
              className={`h-7 px-2.5 rounded-md text-xs active:scale-95 touch-manipulation transition-[background-color,transform] ${
                isActive
                  ? 'bg-zinc-900 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900'
                  : 'bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {visible.length === 0 && (
        <p className='text-zinc-400 dark:text-zinc-500 text-sm py-8 text-center'>
          No projects match the current filters.
        </p>
      )}

      {/* A new key restarts at page 1 whenever the filter changes. */}
      {visible.length > 0 && (
        <SpotlightGroup>
          <Paginated
            key={`${regionFilter}-${techFilter}`}
            perPage={4}
            label='Projects'
            gridClassName='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'
          >
            {visible.map(({ key, card }) => (
              <div key={key} className='contents'>
                {card}
              </div>
            ))}
          </Paginated>
        </SpotlightGroup>
      )}
    </>
  )
}

export default ProjectBrowser
