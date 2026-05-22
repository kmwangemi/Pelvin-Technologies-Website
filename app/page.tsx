import { TopHeader } from '@/components/top-header'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { VisionMissionSection } from '@/components/sections/vision-mission'
import { CoreValuesSection } from '@/components/sections/core-values'
import { ServicesSection } from '@/components/sections/services'
import { ProductsSection } from '@/components/sections/products'
import { PortfolioSection } from '@/components/sections/portfolio'
import { ProcessSection } from '@/components/sections/process'
import { TeamSection } from '@/components/sections/team'
import { PartnersSection } from '@/components/sections/partners'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'
import { LocationMapSection } from '@/components/sections/location-map'

export default function Home() {
  return (
    <>
      <TopHeader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <CoreValuesSection />
        <ServicesSection />
        <ProductsSection />
        <PortfolioSection />
        <ProcessSection />
        <TeamSection />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <LocationMapSection />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  )
}
