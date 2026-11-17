import ProjectModal from '@/components/ProjectModal'

/** One pop-up frame for every project, so "Next project" only swaps what's inside. */
export default function ProjectModalLayout({ children }) {
  return <ProjectModal>{children}</ProjectModal>
}
