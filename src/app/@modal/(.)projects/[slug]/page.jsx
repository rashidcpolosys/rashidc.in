import { notFound } from 'next/navigation'

import CaseStudy from '@/components/CaseStudy'
import ProjectModal from '@/components/ProjectModal'
import { caseStudies, getCaseStudy } from '@/data/projects'

/**
 * Opening a project from the home page shows it as a pop-up instead of
 * leaving the page. A refresh or a shared link loads the full page.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }))
}

export default async function ProjectModalPage({ params }) {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) notFound()

  return (
    <ProjectModal labelledBy={`case-study-${slug}`}>
      <CaseStudy project={project} inModal />
    </ProjectModal>
  )
}
