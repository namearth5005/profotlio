"use client";

import { motion } from "motion/react";
import { Code, Database, Globe, Wrench, GitBranch, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Framer Motion", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    skills: [
      { name: "Python", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "Django", level: 70 },
      { name: "FastAPI", level: 75 }
    ]
  },
  {
    title: "Problem Solving",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "System Design", level: 75 },
      { name: "Debugging", level: 95 },
      { name: "Code Optimization", level: 80 },
      { name: "Testing", level: 85 },
      { name: "LeetCode", level: 80 },
      { name: "Critical Thinking", level: 95 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 }
    ]
  }
];

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{skill.name}</span>
      <span className="text-sm text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
      />
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Additional Expertise</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <GitBranch className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Version Control</h4>
              <p className="text-sm text-muted-foreground">
                Expert in Git workflows, branching strategies, and collaborative development practices.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Creating beautiful, mobile-first interfaces that work seamlessly across all devices.
              </p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <Code className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Clean Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, scalable code following best practices and design patterns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}