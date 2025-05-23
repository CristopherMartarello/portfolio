import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
