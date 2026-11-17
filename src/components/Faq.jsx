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
      <h2 className='headline-2 mb-3 reveal-up'>Frequently asked questions</h2>
      <p className='text-zinc-500 dark:text-zinc-400 mb-8 max-w-[60ch] reveal-up'>
        Quick answers for recruiters and clients.
      </p>

      <div className='space-y-3 w-full max-w-3xl'>
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className='group reveal-up rounded-2xl bg-zinc-200/70 dark:bg-zinc-800/50 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5 open:bg-zinc-200 dark:open:bg-zinc-800/80'
          >
            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-zinc-900 dark:text-zinc-100 [&::-webkit-details-marker]:hidden'>
              <h3 className='font-medium'>{q}</h3>
              <ChevronDown
                size={18}
                className='shrink-0 text-zinc-400 dark:text-zinc-400 transition-transform group-open:rotate-180'
                aria-hidden='true'
              />
            </summary>
            <p className='px-5 pb-5 text-zinc-500 dark:text-zinc-400 leading-relaxed'>{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default Faq
