import { notFound } from 'next/navigation'

import CaseStudy from '@/components/CaseStudy'
import JsonLd from '@/components/JsonLd'
import { caseStudies, getCaseStudy } from '@/data/projects'
import { personReference, SITE_NAME, SITE_URL } from '@/data/site'

/** Only the case studies below exist; any other slug is a 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) return {}

  const { seoTitle: title, seoDescription: description } = project.caseStudy
  const url = `/projects/${slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      siteName: SITE_NAME,
      url,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rashidc_in',
      creator: '@rashidc_in',
      title,
      description,
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) notFound()

  const { name, headline, summary, stack } = project.caseStudy

  return (
    <main className='container pt-28 lg:pt-36'>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CreativeWork',
              name,
              headline,
              description: summary,
              url: `${SITE_URL}/projects/${slug}`,
              image: `${SITE_URL}/projects/${slug}/opengraph-image`,
              keywords: stack.join(', '),
              author: personReference,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}/projects/${slug}` },
              ],
            },
          ],
        }}
      />

      <CaseStudy project={project} />
    </main>
  )
}
