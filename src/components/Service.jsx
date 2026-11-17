/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import {
  Bot,
  Building2,
  Cloud,
  CreditCard,
  Database,
  Globe,
  Rocket,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import Paginated from './Paginated'
import { SpotlightGroup } from './SpotlightGroup'

const services = [
  {
    icon: Building2,
    title: 'ERP & SaaS Development',
    desc: 'Multi-tenant business systems: sales, purchase, inventory, reporting, and UAE VAT tax invoices with credit notes.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Responsive Next.js and React applications for every screen size, with clean architecture and SEO foundations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android apps with React Native, sharing APIs and business logic with your web platform.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    desc: 'REST APIs in Django REST Framework, NestJS and Express, with role-based access and reliable business logic.',
  },
  {
    icon: Database,
    title: 'Database Design',
    desc: 'PostgreSQL and MySQL schema design, indexing, query tuning, and safe migrations on live data.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Docker deployments on AWS (EC2, S3, RDS, Lambda), GitHub Actions CI/CD, backups, and automated releases.',
  },
  {
    icon: CreditCard,
    title: 'Payments & Integrations',
    desc: 'Stripe, PayPal, WhatsApp API and Zoho CRM integrations with secure checkout and reliable transactions.',
  },
  {
    icon: Shield,
    title: 'Security and Authentication',
    desc: 'JWT auth, granular permissions, audit logs, rate limiting, and least-privilege database access.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    desc: 'OpenAI-powered product features and AI-assisted engineering, with careful review for correctness and security.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    desc: 'On-page SEO, technical SEO setup, metadata strategy, and search visibility improvements.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    desc: 'Faster loading and API response times through caching, tuning, and frontend optimization.',
  },
  {
    icon: Wrench,
    title: 'Software Maintenance',
    desc: 'Continuous support, bug fixing, version upgrades, and feature enhancement after launch.',
  },
]

// Cards cycle through blue, green and gold.
const accents = [
  { name: 'sky', from: '#38bdf8', to: '#0284c7', glow: 'rgba(56, 189, 248, 0.16)' },
  { name: 'emerald', from: '#34d399', to: '#059669', glow: 'rgba(52, 211, 153, 0.16)' },
  { name: 'amber', from: '#fbbf24', to: '#d97706', glow: 'rgba(251, 191, 36, 0.16)' },
]

const Service = () => {
  return (
    <section id='services' className='section'>
      <div className='container'>
        <p className='text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 reveal-up'>
          What I do
        </p>

        <h2 className='headline-2 reveal-up'>Services</h2>

        <p className='text-zinc-500 dark:text-zinc-400 mt-3 mb-8 max-w-[60ch] reveal-up'>
          High-impact services focused on building secure, scalable, and
          business-ready digital products.
        </p>

        {/* Gradients for the icon strokes. userSpaceOnUse so straight
            lines (zero-width boxes) still get painted. */}
        <svg width='0' height='0' className='absolute' aria-hidden='true'>
          <defs>
            {accents.map(({ name, from, to }) => (
              <linearGradient
                key={name}
                id={`svc-grad-${name}`}
                gradientUnits='userSpaceOnUse'
                x1='2'
                y1='2'
                x2='22'
                y2='22'
              >
                <stop offset='0%' stopColor={from} />
                <stop offset='100%' stopColor={to} />
              </linearGradient>
            ))}
          </defs>
        </svg>

        <SpotlightGroup className='reveal-up'>
          <Paginated
            perPage={6}
            label='Services'
            gridClassName='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          >
            {services.map(({ icon: Icon, title, desc }, index) => {
              const accent = accents[index % accents.length]

              return (
                <article
                  key={title}
                  data-spotlight
                  style={{
                    '--accent-from': accent.from,
                    '--accent-to': accent.to,
                    '--accent-glow': accent.glow,
                  }}
                  className='skill-card group relative h-full overflow-hidden p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 sm:block ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-[background-color,transform] duration-300'
                >
                  {/* Light that follows the cursor */}
                  <div
                    aria-hidden='true'
                    className='absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                    style={{
                      background:
                        'radial-gradient(280px circle at var(--x, 50%) var(--y, 0%), var(--accent-glow), transparent 65%)',
                    }}
                  />

                  <div className='relative shrink-0 flex items-start justify-between sm:mb-5'>
                    {/* Icon tile: raised glass with a gradient icon */}
                    <div className='relative'>
                      <div className='relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl grid place-items-center overflow-hidden bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_16px_-8px_rgba(0,0,0,0.25)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_16px_-8px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 motion-reduce:!transform-none'>
                        <Icon
                          size={22}
                          strokeWidth={1.75}
                          className='w-5 h-5 sm:w-[22px] sm:h-[22px]'
                          color={`url(#svc-grad-${accent.name})`}
                          aria-hidden='true'
                        />
                        {/* Shine that sweeps across on hover */}
                        <span
                          aria-hidden='true'
                          className='absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out motion-reduce:hidden'
                        />
                      </div>
                    </div>

                    <span className='hidden sm:inline text-sm font-medium tabular-nums text-zinc-400 dark:text-zinc-600 group-hover:text-[color:var(--accent-to)] dark:group-hover:text-[color:var(--accent-from)] transition-colors duration-300'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className='relative min-w-0'>
                    <h3 className='text-base sm:text-lg font-medium mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-sky-500 dark:group-hover:text-sky-400'>
                      {title}
                    </h3>
                    {/* Phones: two lines of description */}
                    <p className='text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none'>
                      {desc}
                    </p>
                  </div>
                </article>
              )
            })}
          </Paginated>
        </SpotlightGroup>
      </div>
    </section>
  )
}

export default Service
