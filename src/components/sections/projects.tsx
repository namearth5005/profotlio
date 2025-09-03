"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Code, Database, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "@/components/ui/neural-background";

const projects = [
  {
    id: 1,
    title: "E-Commerce Full Stack App",
    description: "A complete e-commerce platform with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, product catalog, shopping cart, and payment integration.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    icon: Database,
    featured: true
  },
  {
    id: 2,
    title: "Python Data Analysis Dashboard",
    description: "Interactive dashboard built with Python and Streamlit for analyzing and visualizing complex datasets. Includes data processing, statistical analysis, and interactive charts.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Python",
    icon: Brain,
    featured: true
  },
  {
    id: 3,
    title: "React Todo App with AI",
    description: "Modern todo application with AI-powered task suggestions, drag-and-drop functionality, and beautiful animations. Built with React and integrated with OpenAI API.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "OpenAI API", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
    icon: Smartphone,
    featured: true
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    description: "Interactive web application for visualizing sorting algorithms and data structures. Helps students and developers understand how algorithms work step by step.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "D3.js", "Algorithms", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Problem Solving",
    icon: Code,
    featured: false
  }
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-16 relative overflow-hidden" id="projects">
      {/* Neural Background with reduced intensity */}
      <NeuralBackground 
        intensity={0.3} 
        overlay="from-black/60 via-black/40 to-black/50"
        animate={false}
      />
      
      {/* Connecting gradient line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-cyan-400/40 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            A showcase of my best work demonstrating my skills in full-stack development, 
            Python programming, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-border/50">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <project.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">Project Screenshot</p>
                        <p className="text-xs text-muted-foreground/60">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center gap-4">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center text-white"
            >
              Other Notable Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{project.title}</h4>
                      <span className="text-sm text-primary">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/20 text-white text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-white/60">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}