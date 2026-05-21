import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Portfolio } from '@/components/sections/Portfolio'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Team } from '@/components/sections/Team'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <Process />
        <Pricing />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  )
}
