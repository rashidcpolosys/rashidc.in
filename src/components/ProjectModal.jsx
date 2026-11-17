'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { X } from 'lucide-react'

/**
 * Case study pop-up shown over the home page. The URL is the real project
 * page, so it can be shared or refreshed; closing it goes back in history.
 *
 * It lives in a layout, so moving to the next project only swaps the content
 * inside; the frame itself stays put (no flash, no re-animation).
 */
const ProjectModal = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const lenis = useLenis()
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const slug = pathname.split('/').pop()

  const close = () => router.back()

  // Freeze the page behind while open.
  useEffect(() => {
    lenis?.stop()
    return () => lenis?.start()
  }, [lenis])

  // A new project starts at its top.
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  // Escape closes; Tab stays inside the pop-up; focus returns afterwards.
  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        router.back()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      opener?.focus?.({ preventScroll: true })
    }
  }, [router])

  return (
    <div
      className='fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-zinc-950/70 sm:p-6 animate-[modal-fade_180ms_ease-out] motion-reduce:animate-none'
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={`case-study-${slug}`}
        // Lenis would otherwise swallow wheel scrolling inside the pop-up.
        data-lenis-prevent
        className='relative w-full max-w-5xl max-h-[92dvh] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-t-3xl sm:rounded-3xl bg-zinc-100 dark:bg-zinc-900 ring-1 ring-zinc-900/10 dark:ring-white/10 shadow-2xl px-5 pb-8 sm:px-10 sm:pb-10 animate-[modal-in_240ms_cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:animate-none'
      >
        {/* Stays in the corner while the content scrolls. */}
        <div className='sticky top-0 z-10 flex justify-end pt-4 pb-2 -mr-1 sm:-mr-6 pointer-events-none'>
          <button
            ref={closeRef}
            type='button'
            onClick={close}
            aria-label='Close'
            className='pointer-events-auto w-10 h-10 grid place-items-center rounded-xl bg-zinc-200/90 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 shadow-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors'
          >
            <X size={20} aria-hidden='true' />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ProjectModal
