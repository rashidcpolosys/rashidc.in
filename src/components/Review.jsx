/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import azcOwner from '@/images/review-azc-owner.jpg'
import muneer from '@/images/review-muneer-alfath.jpg'
import samad from '@/images/review-samad-keralabakery.jpg'

import ReviewCard from './ReviewCard'

/**
 * Only real words from real people. Client quotes below were approved by
 * the person named. Don't edit a quote without asking them again.
 */
const reviews = [
  {
    content:
      'Rashid built and runs our NezeX ERP, our e-commerce store and the NIBX website for our US partner. He handles development, deployment and support on his own, and he delivers what we ask for.',
    name: 'Nibal Moidu',
    imgSrc: azcOwner,
    company: 'AZC Electronics Trading LLC & NIBX L.L.C.',
  },
  {
    content:
      'Rashid built our bilingual website and the system our staff use to manage client work. He understood how an accounting firm works and was easy to work with.',
    name: 'Muneer',
    imgSrc: muneer,
    company: 'Al Fath Accounts & Tax Solutions, Abu Dhabi',
  },
  {
    content:
      'Rashid is building KeralaBooks, a sales and purchase ledger for our two bakery shops, designed to use on a tablet and phone. He listens to what we need and keeps improving it.',
    name: 'Samad',
    imgSrc: samad,
    company: 'Kerala Bakery',
  },
]

const Review = () => {
  return (
    <section id='reviews' className='section'>
      <div className='container'>
        <p className='text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 reveal-up'>
          Testimonials
        </p>
        <h2 className='headline-2 mb-6 sm:mb-8 reveal-up'>What clients say</h2>

        {/* Phones: a swipeable row where the next card peeks in.
            Tablet and up: a normal grid. */}
        <div className='flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:-mx-5 sm:px-5 pb-2 scroll-px-4 sm:scroll-px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0 reveal-up'>
          {reviews.map(({ content, name, imgSrc, company }) => (
            <div key={name} className='snap-start shrink-0 w-[85%] xs:w-[80%] md:w-auto'>
              <ReviewCard
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
              />
            </div>
          ))}
        </div>

        <p className='md:hidden mt-2 text-xs text-zinc-400 dark:text-zinc-500'>
          Swipe to see more &rarr;
        </p>
      </div>
    </section>
  )
}

export default Review
