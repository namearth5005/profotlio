import { Preview } from "@/components/demo"
import AboutSection from "@/components/sections/about"
import ProjectsSection from "@/components/sections/projects"
import ExperienceSection from "@/components/sections/experience"
import ContactSection from "@/components/sections/contact"
import PortfolioNavbar from "@/components/ui/portfolio-navbar"

export default function Home() {
  return (
    <>
      <PortfolioNavbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Preview />
        
        {/* About Me Section */}
        <AboutSection />
        
        {/* Featured Projects Section */}
        <ProjectsSection />
        
        {/* Experience & Journey Section (Using Timeline) */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}