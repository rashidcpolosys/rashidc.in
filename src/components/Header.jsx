/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'
import logo from '@/images/logo-rc.svg'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!navOpen) return
    const handlePointerDown = (e) => {
      if (!menuRef.current?.contains(e.target)) setNavOpen(false)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [navOpen])

  return (
    <header
      className='fixed top-0 left-0 w-full h-16 sm:h-20 z-40 flex items-center'
      style={{
        background: 'linear-gradient(to bottom, var(--header-from), transparent)',
        viewTransitionName: 'site-header',
      }}
    >
      {/*
        3-column layout on all sizes:
          [logo]  [nav — grows + centers on desktop, empty on mobile]  [toggle + contact + burger]
      */}
      <div
        ref={menuRef}
        className='relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-[auto_1fr_auto] items-center gap-2'
      >

        {/* col 1 — Logo */}
        <Link
          href='/#home'
          prefetch={false}
          aria-label='Go to top'
          className='hover:opacity-75 transition-opacity'
          style={{ color: '#09090b' }}
        >
          <Image src={logo} alt='RC' width={38} height={38} className='w-9 h-9 sm:w-10 sm:h-10 block' preload />
        </Link>

        {/* col 2 — the one menu: inline and centred on desktop; on phones a dropdown under the menu button */}
        <div className='max-md:absolute max-md:top-full max-md:right-4 sm:max-md:right-6 md:flex md:justify-center'>
          <Navbar navOpen={navOpen} onNavigate={() => setNavOpen(false)} />
        </div>

        {/* col 3 — Right actions + mobile nav anchor */}
        <div className='flex items-center gap-2 justify-end'>
          <ThemeToggle />

          <Link
            href='/#contact'
            prefetch={false}
            className='btn btn-secondary whitespace-nowrap max-md:!hidden'
          >
            Contact Me
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type='button'
            className='menu-btn md:hidden'
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={20} aria-hidden='true' /> : <Menu size={20} aria-hidden='true' />}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Header
