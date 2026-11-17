'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLenis } from 'lenis/react'

// Progress ring geometry (SVG viewBox is 44 x 44)
const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const ringRef = useRef(null)
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)

      // Fill the ring as the page scrolls; set directly to avoid re-renders.
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - progress)}`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Back to top'
      className={`group fixed bottom-36 right-5 md:bottom-20 md:right-7 z-50 w-9 h-9 md:w-10 md:h-10 grid place-items-center rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 shadow-lg hover:scale-110 active:scale-95 transition-[opacity,transform] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Scroll progress ring */}
      <svg
        viewBox='0 0 44 44'
        aria-hidden='true'
        className='absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] -rotate-90'
      >
        <circle
          cx='22'
          cy='22'
          r={RADIUS}
          fill='none'
          strokeWidth='2'
          className='stroke-zinc-900/10 dark:stroke-zinc-50/10'
        />
        <circle
          ref={ringRef}
          cx='22'
          cy='22'
          r={RADIUS}
          fill='none'
          strokeWidth='2'
          strokeLinecap='round'
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className='stroke-sky-400 transition-[stroke-dashoffset] duration-150'
        />
      </svg>

      <ArrowUp
        size={16}
        aria-hidden='true'
        className='arrow-bob group-hover:[animation-play-state:paused]'
      />
    </button>
  )
}

export default BackToTop
