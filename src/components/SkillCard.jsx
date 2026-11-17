/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'

const SkillCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      className={`skill-card relative flex items-center gap-2 sm:gap-3 overflow-hidden ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 rounded-xl sm:rounded-2xl p-2 pl-3 sm:p-3 sm:pl-4 hover:ring-sky-400/25 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(14,165,233,0.45)] motion-reduce:hover:translate-y-0 transition-[background-color,box-shadow,transform] duration-300 group ${classes}`}
    >
      {/* Blue accent bar */}
      <span
        aria-hidden='true'
        className='absolute left-0 inset-y-2.5 sm:inset-y-3 w-[3px] sm:w-1 rounded-r-full bg-sky-400 transition-[top,bottom] duration-300 group-hover:inset-y-0'
      />
      <figure className='bg-zinc-200 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 sm:w-12 sm:h-12 shrink-0 p-1.5 sm:p-2 group-hover:bg-white dark:group-hover:bg-zinc-900 transition-colors'>
        <Image src={imgSrc} alt='' width={32} height={32} className='w-full h-full object-contain' />
      </figure>
      <div className='min-w-0 flex-1'>
        {/* Phones: name may wrap to 2 lines and the description is hidden */}
        <h3 className='text-sm sm:text-base leading-tight sm:leading-normal line-clamp-2 sm:line-clamp-none sm:truncate transition-colors duration-300 group-hover:text-sky-500 dark:group-hover:text-sky-400'>
          {label}
        </h3>
        <p className='hidden sm:block text-zinc-500 dark:text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default SkillCard
