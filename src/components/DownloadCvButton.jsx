'use client'

import { Download } from 'lucide-react'
import { CV_FILENAME, CV_PATH } from '@/data/site'

const trackDownload = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cv_download', {
      event_category: 'engagement',
      event_label: CV_FILENAME,
    })
  }
}

/** CV download button with built-in analytics tracking. */
export const DownloadCvButton = ({ label = 'Download CV' }) => (
  <a
    href={CV_PATH}
    download={CV_FILENAME}
    className='btn btn-primary'
    onClick={trackDownload}
  >
    {label}
    <Download size={18} aria-hidden='true' />
  </a>
)
