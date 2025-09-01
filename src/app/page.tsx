import { Preview } from "@/components/demo"
import AboutSection from "@/components/sections/about"
import ProjectsSection from "@/components/sections/projects"
import SkillsSection from "@/components/sections/skills"
import ExperienceSection from "@/components/sections/experience"
import ContactSection from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Preview />
      
      {/* About Me Section */}
      <AboutSection />
      
      {/* Featured Projects Section */}
      <ProjectsSection />
      
      {/* Skills & Technologies Section */}
      <SkillsSection />
      
      {/* Experience & Journey Section (Using Timeline) */}
      <ExperienceSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}