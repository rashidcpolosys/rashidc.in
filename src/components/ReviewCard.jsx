import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const STAR_COUNT = 5

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <figure className='group relative h-full flex flex-col overflow-hidden p-4 sm:p-6 rounded-2xl bg-white dark:bg-zinc-800/60 ring-1 ring-inset ring-zinc-900/[0.06] dark:ring-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:ring-sky-400/40 motion-reduce:hover:translate-y-0 transition-[transform,box-shadow] duration-300'>
      {/* Large quote mark in the corner */}
      <Quote
        aria-hidden='true'
        className='absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 text-sky-400/15 fill-sky-400/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:!transform-none'
      />

      <div className='flex items-center gap-0.5 mb-3' role='img' aria-label='5 out of 5 stars'>
        {Array.from({ length: STAR_COUNT }, (_, index) => (
          <Star
            key={index}
            size={16}
            className='text-amber-400 fill-amber-400'
            aria-hidden='true'
          />
        ))}
      </div>

      <blockquote className='relative text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5 sm:mb-8'>
        &ldquo;{content}&rdquo;
      </blockquote>

      <figcaption className='flex items-center gap-3 mt-auto pt-4 border-t border-zinc-900/[0.06] dark:border-white/5'>
        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-sky-400/30'>
          <Image
            src={imgSrc}
            alt=''
            sizes='48px'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='min-w-0'>
          <p className='font-medium transition-colors duration-300 group-hover:text-sky-500 dark:group-hover:text-sky-400'>
            {name}
          </p>
          <p className='text-xs text-zinc-500 dark:text-zinc-400 tracking-wide'>{company}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default ReviewCard
