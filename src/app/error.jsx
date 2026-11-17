'use client'

import { contact } from '@/data/contact'

export default function Error({ reset }) {
  return (
    <main className='container pt-36 lg:pt-44'>
      <h1 className='headline-2 mb-4'>This page didn&apos;t load</h1>
      <p className='text-zinc-500 dark:text-zinc-400 mb-8 max-w-[50ch]'>
        Try loading it again. You can also reach me directly at{' '}
        <a href={`mailto:${contact.email}`} className='text-zinc-700 dark:text-zinc-200 underline hover:text-sky-500 dark:hover:text-sky-300'>
          {contact.email}
        </a>
        .
      </p>
      <button type='button' onClick={reset} className='btn btn-primary'>
        Try again
      </button>
    </main>
  )
}
