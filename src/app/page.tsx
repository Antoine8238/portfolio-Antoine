// app/page.tsx ou pages/index.tsx
import Navbar from './Navbar/page';  
import HeroSection from './HeroSection/page';
import SkillsSection from './SkillsSection/page';
import ProjectsSection from './ProjectsSection/page';
import ContactSection from './ContactSection/page';
import Footer from './Footer/page';

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
