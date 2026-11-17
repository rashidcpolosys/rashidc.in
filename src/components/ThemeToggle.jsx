'use client'

import { useSyncExternalStore } from 'react'

/**
 * The theme lives on <html class="dark">, set before first paint by the
 * script in layout.jsx. This reads it directly instead of copying it into
 * state, so the toggle always matches the page.
 */
const subscribe = (onChange) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
const getSnapshot = () => document.documentElement.classList.contains('dark')
const getServerSnapshot = () => true

const ThemeToggle = () => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Private browsing can block storage; the switch still works for this visit.
    }
  }

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='relative flex items-center w-[3.25rem] h-7 rounded-full px-[0.2rem] gap-[0.2rem]
        bg-zinc-200 dark:bg-zinc-700
        transition-colors duration-300
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400'
    >
      {/* Sun — left */}
      <svg
        viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'
        className={`relative z-10 w-[1.1rem] h-[1.1rem] shrink-0 transition-opacity duration-300
          ${isDark ? 'opacity-30 text-amber-400' : 'opacity-100 text-amber-500'}`}
      >
        <path d='M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-9a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM4 12a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm14.95-6.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM6.757 17.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM18.95 18.364a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM7.464 6.343a1 1 0 0 1-1.414 1.414l-.707-.707A1 1 0 0 1 6.757 5.636l.707.707ZM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7Z' />
      </svg>

      {/* Moon — right */}
      <svg
        viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'
        className={`relative z-10 w-[1.1rem] h-[1.1rem] shrink-0 transition-opacity duration-300 ml-auto
          ${isDark ? 'opacity-100 text-sky-300' : 'opacity-30 text-sky-400'}`}
      >
        <path d='M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z' />
      </svg>

      {/* Sliding circle — behind icons */}
      <span
        aria-hidden='true'
        className={`absolute top-[0.2rem] w-[1.4rem] h-[1.4rem] rounded-full shadow-sm
          bg-white dark:bg-zinc-900
          transition-[left] duration-300 ease-in-out
          ${isDark ? 'left-[calc(100%-1.6rem)]' : 'left-[0.2rem]'}`}
      />
    </button>
  )
}

export default ThemeToggle
