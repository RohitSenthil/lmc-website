import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CrisisSection from "@/components/crisis-section";
import SolutionsSection from "@/components/solutions-section";
import TimelineSection from "@/components/timeline-section";
import PosterSection from "@/components/poster-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-900 leading-relaxed">
      <Navigation />
      <HeroSection />
      <CrisisSection />
      <SolutionsSection />
      <TimelineSection />
      <PosterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
