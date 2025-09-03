import { Preview } from "@/components/demo"
import ExperienceSection from "@/components/sections/experience"
import NeuralBackground from "@/components/ui/neural-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Neural Background - dynamically sized to full document height */}
      <NeuralBackground 
        intensity={1.0} 
        overlay=""
        animate={true}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Preview />
        
        {/* Timeline Section */}
        <ExperienceSection />
      </div>
    </div>
  )
}