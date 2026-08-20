import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import ProofBar from '@/components/sections/ProofBar'
import SelectedWorks from '@/components/sections/SelectedWorks'
import Process from '@/components/sections/Process'
import AboutTeaser from '@/components/sections/AboutTeaser'
import ContactCta from '@/components/sections/ContactCta'
import JsonLd from '@/components/ui/JsonLd'
import { pageMetadata, personJsonLd, profilePageJsonLd } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ path: '/' })

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personJsonLd, profilePageJsonLd]} />
      <Hero />
      <Marquee />
      <Services />
      <ProofBar />
      <SelectedWorks />
      <Process />
      <AboutTeaser />
      <ContactCta />
    </>
  )
}
