import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

import Ledger from './Ledger'
import { caseStudies } from '@/data/projects'

/**
 * The body of a case study. Used by the full page (/projects/[slug]) and by
 * the pop-up that opens over the home page.
 */
const CaseStudy = ({ project, inModal = false }) => {
  const { slug, imgSrc, projectLink, caseStudy } = project
  const { name, headline, summary, role, company, period, linkLabel, stats, highlights, stack } =
    caseStudy

  const position = caseStudies.findIndex((item) => item.slug === slug)
  const next = caseStudies[(position + 1) % caseStudies.length]
  const headingId = `case-study-${slug}`

  const details = [
    { label: 'Role', value: role },
    { label: 'Company', value: company },
    { label: 'Period', value: period },
  ]

  return (
    <article aria-labelledby={headingId}>
      {!inModal && (
        <Link
          href='/#work'
          className='inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200 mb-8'
        >
          <ArrowLeft size={18} aria-hidden='true' />
          All projects
        </Link>
      )}

      <p className='text-sky-500 dark:text-sky-400 mb-3'>{name}</p>
      <h1 id={headingId} className='headline-2 max-w-[24ch] mb-5'>
        {headline}
      </h1>
      <p className='text-zinc-600 dark:text-zinc-300 md:text-lg leading-relaxed max-w-[65ch] mb-8'>
        {summary}
      </p>

      <div className='flex flex-wrap items-center gap-3 mb-10'>
        <a href={projectLink} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
          {linkLabel}
          <ArrowUpRight aria-hidden='true' />
        </a>

        {inModal && (
          // A plain link, so it loads the full page instead of reopening this pop-up.
          <a href={`/projects/${slug}`} className='btn btn-outline'>
            Open full page
          </a>
        )}
      </div>

      <figure className='img-box aspect-video rounded-2xl mb-12 ring-1 ring-inset ring-white/10'>
        <Image
          src={imgSrc}
          alt={`${name} screenshot`}
          sizes='(min-width: 1280px) 1088px, 100vw'
          placeholder='blur'
          preload={!inModal}
          className='img-cover'
        />
      </figure>

      <div className='grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14'>
        <section aria-labelledby={`${headingId}-built`}>
          <h2 id={`${headingId}-built`} className='title-1 mb-5'>
            What I built
          </h2>
          <ul className='space-y-3'>
            {highlights.map((item) => (
              <li key={item} className='text-zinc-600 dark:text-zinc-300 flex gap-2'>
                <span
                  className='mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0'
                  aria-hidden='true'
                ></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className='lg:border-l lg:border-zinc-300 dark:lg:border-zinc-700/60 lg:pl-14 space-y-8'>
          <dl className='space-y-4'>
            {details.map(({ label, value }) => (
              <div key={label}>
                <dt className='text-xs text-zinc-400 dark:text-zinc-500 mb-1'>{label}</dt>
                <dd className='text-zinc-700 dark:text-zinc-200'>{value}</dd>
              </div>
            ))}
          </dl>

          {stats.length > 0 && <Ledger rows={stats} />}

          <div>
            <h2 className='text-xs text-zinc-500 mb-2'>Built with</h2>
            <ul className='flex flex-wrap gap-1.5'>
              {stack.map((item) => (
                <li
                  key={item}
                  className='h-6 leading-6 text-xs text-zinc-600 dark:text-zinc-300 bg-zinc-900/5 dark:bg-zinc-50/5 px-2.5 rounded-md'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className='group mt-14 flex items-center justify-between gap-4 rounded-2xl p-6 bg-zinc-200/80 dark:bg-zinc-800/50 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800'
      >
        <span>
          <span className='block text-sm text-zinc-500 dark:text-zinc-400 mb-1'>Next project</span>
          <span className='title-1'>{next.caseStudy.name}</span>
        </span>
        <ArrowRight
          className='text-sky-400 shrink-0 transition-transform group-hover:translate-x-1'
          aria-hidden='true'
        />
      </Link>
    </article>
  )
}

export default CaseStudy
