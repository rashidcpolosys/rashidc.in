/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonPrimary } from './Button'
import { DownloadCvButton } from './DownloadCvButton'
import { TypedHeading } from './TypedHeading'
import { contact } from '@/data/contact'
import logo from '@/images/logo-rc.svg'

const sitemap = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact me', href: '/#contact' },
]

const socials = [
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'GitHub', href: contact.github },
  { label: 'X (Twitter)', href: contact.x },
  { label: 'Instagram', href: contact.instagram },
  { label: 'WhatsApp', href: contact.whatsappHref },
]

// Footer links turn blue and nudge right on hover.
const linkClass =
  'block w-max text-sm text-zinc-500 dark:text-zinc-400 py-1 transition-[color,transform] duration-200 hover:text-sky-500 dark:hover:text-sky-400 hover:translate-x-1 motion-reduce:hover:translate-x-0'

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <p className='text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-3 reveal-up'>
          Get in touch
        </p>

        {/* Full width and fluid size, so the sentence always fits one line */}
        <TypedHeading
          text='Let’s work together today!'
          className='mb-4 reveal-up'
          textClassName='whitespace-nowrap !text-[clamp(1.375rem,5.6vw,3.4375rem)] !leading-[1.15]'
        />

        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto]'>
          <div>
            <p className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-8 reveal-up'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400 shrink-0'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none'></span>
              </span>
              Available immediately in Dubai, UAE.
            </p>

            <div className='flex flex-wrap items-center gap-3 reveal-up'>
              <ButtonPrimary
                href={`mailto:${contact.email}`}
                label='Email me'
                icon={ArrowRight}
              />
              <DownloadCvButton variant='outline' />
            </div>
            <p className='text-sm text-zinc-500 dark:text-zinc-400 mt-5 reveal-up'>
              <a
                href={contact.phoneUae.href}
                className='text-zinc-700 dark:text-zinc-200 transition-colors hover:text-sky-500 dark:hover:text-sky-300'
              >
                {contact.phoneUae.display}
              </a>{' '}
              (UAE) &middot;{' '}
              <a
                href={`mailto:${contact.email}`}
                className='text-zinc-700 dark:text-zinc-200 transition-colors hover:text-sky-500 dark:hover:text-sky-300 break-all'
              >
                {contact.email}
              </a>
            </p>
          </div>

          <div className='grid grid-cols-2 gap-6 sm:gap-10 sm:pl-0 lg:pl-10'>
            <div>
              <p className='mb-3 font-medium reveal-up'>Sitemap</p>
              <ul className='space-y-0.5'>
                {sitemap.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      prefetch={false}
                      className={`${linkClass} reveal-up`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='mb-3 font-medium reveal-up'>Socials</p>
              <ul className='space-y-0.5'>
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${linkClass} reveal-up`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-10 mb-8 border-t border-zinc-200 dark:border-zinc-800 mt-10'>
          <Link
            href='/#home'
            prefetch={false}
            className='logo reveal-up hover:opacity-80 transition-opacity'
            style={{ color: '#09090b' }}
            aria-label='Rashid C home'
          >
            <Image src={logo} width={40} height={40} alt='RC logo' />
          </Link>

          <p className='text-zinc-400 dark:text-zinc-500 text-sm reveal-up'>
            &copy; 2026 <span className='text-zinc-700 dark:text-zinc-200'>RASHID_C</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
