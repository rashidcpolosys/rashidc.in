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
        <h2 className='headline-2 mb-8 reveal-up'>What clients say</h2>
        <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {reviews.map(({ content, name, imgSrc, company }) => (
            <ReviewCard
              key={name}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review
