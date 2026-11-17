import { ChevronDown } from 'lucide-react'
import JsonLd from './JsonLd'
import { contact } from '@/data/contact'

/** Short, factual answers. Search answer boxes and AI assistants quote text like this directly. */
const faqs = [
  {
    q: 'Who is Rashid C?',
    a: 'Rashid C is a Full Stack Engineer based in Dubai, UAE, with around 4 years of experience building business software: ERP, SaaS, invoicing and e-commerce systems. He works at AZC Electronics Trading LLC in Dubai.',
  },
  {
    q: 'What does Rashid C build?',
    a: 'Multi-tenant ERP and SaaS platforms, UAE VAT-compliant invoicing, practice management systems, e-commerce websites with Stripe and PayPal, and REST APIs. His work includes NezeX One (a cloud ERP live in the UAE), Al Fath (a system for an Abu Dhabi accounting firm) and azcstore.info.',
  },
  {
    q: 'Which technologies does Rashid C use?',
    a: 'Next.js, React and TypeScript on the front end; Django REST Framework, NestJS and Node.js on the back end; PostgreSQL, MySQL and MongoDB for data; Docker, AWS and GitHub Actions for deployment.',
  },
  {
    q: 'What is NezeX One?',
    a: 'NezeX One is a multi-tenant cloud ERP built by Rashid C as its sole engineer. It is live in production in the UAE, with UAE VAT tax invoices, credit notes, inventory, role-based access with 29 permissions, and 527 automated tests.',
  },
  {
    q: 'Is Rashid C available for hire?',
    a: 'Yes. Rashid C is available immediately for full-time Full Stack, Backend and Software Engineer roles in Dubai and across the UAE, and for project work in the UAE, the USA and India.',
  },
  {
    q: 'How can I contact Rashid C?',
    a: `Call or WhatsApp ${contact.phoneUae.display} (UAE), or email ${contact.email}. You can also use the contact form on this page.`,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const Faq = () => (
  <section id='faq' className='section'>
    <JsonLd data={faqJsonLd} />
    <div className='container'>
      <p className='text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 reveal-up'>
        FAQ
      </p>
      <h2 className='headline-2 mb-3 reveal-up'>Frequently asked questions</h2>
      <p className='text-zinc-500 dark:text-zinc-400 mb-6 sm:mb-8 max-w-[60ch] reveal-up'>
        Quick answers for recruiters and clients.
      </p>

      <div className='space-y-2 sm:space-y-3 w-full max-w-3xl'>
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className='faq-item group reveal-up rounded-xl sm:rounded-2xl bg-zinc-200/70 dark:bg-zinc-800/50 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5 open:bg-zinc-200 dark:open:bg-zinc-800/80 open:ring-sky-400/40 transition-[background-color,box-shadow] duration-300'
          >
            <summary className='group/q flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:p-5 text-zinc-900 dark:text-zinc-100 [&::-webkit-details-marker]:hidden'>
              <h3 className='text-sm sm:text-base font-medium transition-colors duration-300 group-hover/q:text-sky-500 dark:group-hover/q:text-sky-400 group-open:text-sky-500 dark:group-open:text-sky-400'>
                {q}
              </h3>
              <span className='shrink-0 w-7 h-7 rounded-full grid place-items-center bg-zinc-900/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 transition-[transform,background-color,color] duration-300 group-open:rotate-180 group-open:bg-sky-400 group-open:text-zinc-950 group-hover/q:text-sky-500 dark:group-hover/q:text-sky-400 group-open:group-hover/q:text-zinc-950'>
                <ChevronDown size={16} aria-hidden='true' />
              </span>
            </summary>
            <p className='px-4 pb-4 sm:px-5 sm:pb-5 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed'>
              {a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default Faq
