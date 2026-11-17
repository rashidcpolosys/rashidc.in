/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'

const SkillCard = ({ imgSrc, label, desc, classes = '' }) => {
  return (
    <div
      className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors group ${classes}`}
    >
      <figure className='bg-zinc-200 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 shrink-0 p-2 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-900 transition-colors'>
        <Image src={imgSrc} alt='' width={32} height={32} />
      </figure>
      <div className='min-w-0 flex-1'>
        <h3 className='truncate'>{label}</h3>
        <p className='text-zinc-500 dark:text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default SkillCard
