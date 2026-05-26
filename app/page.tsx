import { BackToTop } from "@/components/back-to-top";
import { CookieConsent } from "@/components/cookie-consent";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { CoreValuesSection } from "@/components/sections/core-values";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { LocationMapSection } from "@/components/sections/location-map";
import { PartnersSection } from "@/components/sections/partners";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { ProductsSection } from "@/components/sections/products";
import { ServicesSection } from "@/components/sections/services";
import { TeamSection } from "@/components/sections/team";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { VisionMissionSection } from "@/components/sections/vision-mission";
import { TopHeader } from "@/components/top-header";

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
	);
}
