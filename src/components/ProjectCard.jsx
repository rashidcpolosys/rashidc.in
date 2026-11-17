/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

// Same blue / green / gold accents as the Services cards.
const accents = [
  { from: '#38bdf8', to: '#0284c7', glow: 'rgba(56, 189, 248, 0.16)' },
  { from: '#34d399', to: '#059669', glow: 'rgba(52, 211, 153, 0.16)' },
  { from: '#fbbf24', to: '#d97706', glow: 'rgba(251, 191, 36, 0.16)' },
]

const MAX_VISIBLE_TAGS = 3

/** Cards with a case study open it on this site; the rest open the live project. */
const ProjectCard = ({ project, index = 0 }) => {
  const { slug, imgSrc, title, tags, projectLink, caseStudy, inProgress, region } = project
  const accent = accents[index % accents.length]
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS)
  const hiddenCount = tags.length - MAX_VISIBLE_TAGS
  const Arrow = caseStudy ? ArrowRight : ArrowUpRight

  return (
    <div
      data-spotlight
      style={{
        '--accent-from': accent.from,
        '--accent-to': accent.to,
        '--accent-glow': accent.glow,
      }}
      className='skill-card group relative h-full overflow-hidden p-4 rounded-2xl ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-[background-color,transform] duration-300'
    >
      {/* Light that follows the cursor */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        style={{
          background:
            'radial-gradient(300px circle at var(--x, 50%) var(--y, 0%), var(--accent-glow), transparent 65%)',
        }}
      />

      <figure className='img-box relative aspect-video rounded-xl mb-4 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5'>
        {region && (
          <span className='absolute top-2 left-2 z-10 h-6 leading-6 px-2 rounded-md text-xs font-medium backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-100 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10'>
            {region}
          </span>
        )}
        {inProgress && (
          <span className='absolute top-2 right-2 z-10 h-6 px-2 rounded-md flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 text-amber-700 dark:text-amber-300 ring-1 ring-inset ring-amber-500/30'>
            <span className='relative w-1.5 h-1.5 rounded-full bg-amber-400'>
              <span className='absolute inset-0 rounded-full bg-amber-400 animate-ping motion-reduce:animate-none'></span>
            </span>
            In progress
          </span>
        )}
        <Image
          src={imgSrc}
          alt={`${title} screenshot`}
          sizes='(min-width: 1024px) 260px, (min-width: 640px) 45vw, 50vw'
          placeholder='blur'
          className='img-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:!transform-none'
        />
        {/* Soft shade from the bottom on hover */}
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        />
      </figure>

      <div className='relative flex items-start justify-between gap-3'>
        <div className='min-w-0 flex-1'>
          <h3
            className='text-base md:text-lg leading-snug font-medium mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-sky-500 dark:group-hover:text-sky-400'
            title={title}
          >
            {title}
          </h3>

          <div className='flex flex-wrap items-center gap-1.5'>
            {visibleTags.map((label) => (
              <span
                key={label}
                title={label}
                className='h-6 leading-6 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-900/5 dark:bg-zinc-50/5 block max-w-full truncate px-2.5 rounded-md'
              >
                {label}
              </span>
            ))}

            {hiddenCount > 0 && (
              <span className='h-6 text-xs text-zinc-400 dark:text-zinc-500 bg-zinc-900/5 dark:bg-zinc-50/5 grid items-center px-2.5 rounded-md'>
                +{hiddenCount}
              </span>
            )}
          </div>
        </div>

        {!inProgress && (
          <div className='w-11 h-11 rounded-xl place-items-center bg-sky-400 text-zinc-950 shrink-0 self-start grid shadow-[0_6px_16px_-8px_rgba(14,165,233,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 motion-reduce:!transform-none'>
            <Arrow
              aria-hidden='true'
              className={`transition-transform duration-300 motion-reduce:!transform-none ${
                caseStudy
                  ? 'group-hover:translate-x-0.5'
                  : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              }`}
            />
          </div>
        )}
      </div>

      {inProgress ? null : caseStudy ? (
        <Link
          href={`/projects/${slug}`}
          aria-label={`Read about ${caseStudy.name}`}
          className='absolute inset-0 rounded-2xl'
        ></Link>
      ) : (
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Open project: ${title}`}
          className='absolute inset-0 rounded-2xl'
        ></a>
      )}
    </div>
  )
}

export default ProjectCard
