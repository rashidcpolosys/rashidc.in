import { Download } from 'lucide-react'
import { CV_FILENAME, CV_PATH } from '@/data/site'

export const DownloadCvButton = ({ label = 'Download CV' }) => (
  <a href={CV_PATH} download={CV_FILENAME} className='btn btn-primary'>
    {label}
    <Download size={18} aria-hidden='true' />
  </a>
)
