import HeroSection from "@/components/hero/hero-section";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackgroundEffects from "@/components/ui/background-effects";
import TechStackSection from "@/components/sections/tech-stack";
import FeaturedProjects from "@/components/sections/featured-projects";
import SkillsSection from "@/components/sections/skills-section";
import AboutSection from "@/components/sections/about-section";
import TimelineSection from "@/components/sections/timeline-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <FeaturedProjects />
        <SkillsSection />
        <AboutSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
