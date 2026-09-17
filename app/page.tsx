import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
