/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import ProjectBrowser from './ProjectBrowser'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

/** Technologies that come with another one, so the tech filters find every project that uses them. */
const IMPLIED_TECH = {
  MERN: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  'Next.js': ['React', 'Node.js'],
  NestJS: ['Node.js'],
  'React.js': ['Node.js'],
  'Django REST Framework': ['Django'],
}

/** Card tags plus the full case-study stack plus implied tech; used only for filtering. */
const techFor = ({ tags = [], caseStudy }) => {
  const all = new Set([...tags, ...(caseStudy?.stack ?? [])])
  for (const tech of [...all]) {
    for (const implied of IMPLIED_TECH[tech] ?? []) all.add(implied)
  }
  return [...all]
}

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <p className='text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 reveal-up'>
          Selected work
        </p>
        <h2 className='headline-2 mb-3 reveal-up'>Major projects</h2>

        <p className='text-zinc-500 dark:text-zinc-400 mb-6 max-w-[60ch] reveal-up'>
          Software and websites I&apos;ve built for businesses in the UAE,
          the USA and India.
        </p>

        <div className='reveal-up'>
          <ProjectBrowser
            cards={projects.map((project, index) => ({
              key: project.slug,
              region: project.region,
              tags: techFor(project),
              card: <ProjectCard project={project} index={index} />,
            }))}
          />
        </div>
      </div>
    </section>
  )
}

export default Work
