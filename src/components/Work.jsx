/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import ProjectBrowser from './ProjectBrowser'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-3 reveal-up'>Major projects</h2>

        <p className='text-zinc-400 mb-6 max-w-[60ch] reveal-up'>
          Software and websites I&apos;ve built for businesses in the UAE,
          the USA and India.
        </p>

        <div className='reveal-up'>
          <ProjectBrowser
            cards={projects.map((project, index) => ({
              key: project.slug,
              region: project.region,
              card: <ProjectCard project={project} index={index} />,
            }))}
          />
        </div>
      </div>
    </section>
  )
}

export default Work
