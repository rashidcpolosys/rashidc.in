import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import Review from '@/components/Review'
import Service from '@/components/Service'
import Skill from '@/components/Skill'
import Work from '@/components/Work'
import { profilePageJsonLd } from '@/data/site'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main>
      <JsonLd data={profilePageJsonLd} />
      <Hero />
      <About />
      <Service />
      <Skill />
      <Work />
      <Experience />
      <Review />
      <Faq />
      <Contact />
    </main>
  )
}
