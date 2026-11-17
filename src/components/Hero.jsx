/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { ButtonOutline } from './Button'
import { DownloadCvButton } from './DownloadCvButton'
import profile from '@/images/profile.png'

const Hero = () => {
  return (
    <section id='home' className='pt-24 sm:pt-28 lg:pt-36'>
      <div className='container grid md:grid-cols-2 md:grid-rows-[1fr_auto_auto_1fr] md:gap-x-10 lg:gap-x-14'>
        <div className='md:col-start-1 md:row-start-2'>
          <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg shrink-0'>
              <Image src={profile} alt='' sizes='36px' className='img-cover' />
            </figure>

            <div className='flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-sm tracking-wide'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400 shrink-0'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none'></span>
              </span>
              Available immediately &middot; Dubai,&nbsp;UAE
            </div>
          </div>

          <p className='headline-1 max-w-[15ch] sm:max-w-[20ch] md:max-w-[15ch] mt-5 mb-4'>
            Engineering Scalable Full-Stack Systems
          </p>

          <h1 className='text-zinc-500 dark:text-zinc-400 font-normal text-base sm:text-lg max-w-[42ch] mb-8 lg:mb-10'>
            Rashid C &mdash; Full Stack Engineer in Dubai, building ERP, SaaS
            and e-commerce systems with Next.js, Node.js, Django and PostgreSQL.
          </h1>
        </div>

        <figure className='w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[320px] mx-auto mb-8 bg-gradient-to-t from-sky-400 via-sky-400 to-65% rounded-[40px] overflow-hidden ring-2 ring-sky-300/30 shadow-[0_0_40px_rgba(56,189,248,0.35)] md:col-start-2 md:row-start-1 md:row-span-4 md:max-w-[380px] md:mb-0 md:ml-auto md:mr-0 md:self-center md:rounded-[60px] md:ring-sky-300/20 md:shadow-[0_0_48px_rgba(56,189,248,0.28)] lg:max-w-[460px] xl:max-w-[480px]'>
          <Image
            src={profile}
            alt='Rashid C, Full Stack Engineer in Dubai, UAE'
            sizes='(min-width: 1280px) 480px, (min-width: 1024px) 460px, (min-width: 768px) 380px, (min-width: 640px) 320px, 300px'
            preload
            className='w-full'
          />
        </figure>

        <div className='flex flex-wrap items-center gap-3 md:col-start-1 md:row-start-3'>
          <DownloadCvButton />
          <ButtonOutline href='/#about' label='Scroll down' icon={ArrowDown} />
        </div>
      </div>
    </section>
  )
}

export default Hero
