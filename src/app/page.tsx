import Hero from '@/components/sections/Hero'
import ProofBar from '@/components/sections/ProofBar'
import Services from '@/components/sections/Services'
import SelectedWorks from '@/components/sections/SelectedWorks'
import Process from '@/components/sections/Process'
import AboutTeaser from '@/components/sections/AboutTeaser'
import ContactCta from '@/components/sections/ContactCta'
import JsonLd from '@/components/ui/JsonLd'
import type { Metadata } from 'next'
import { pageMetadata, personJsonLd, profilePageJsonLd } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ path: '/' })

export default function HomePage() {
  return (
    <>
      <JsonLd data={[personJsonLd, profilePageJsonLd]} />
      <Hero />
      <ProofBar />
      <Services />
      <SelectedWorks />
      <Process />
      <AboutTeaser />
      <ContactCta />
    </>
  )
}
