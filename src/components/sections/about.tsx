"use client";

import { motion } from "motion/react";
import { Code, Brain, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Professional Photo</p>
                <p className="text-xs text-muted-foreground/60">Coming Soon</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hi, I'm Nam Bouchara</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate <span className="text-primary font-medium">Full Stack Developer</span> with expertise in 
                Python and JavaScript. I love solving complex problems and building applications that make a difference.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                My journey in programming started with curiosity and has evolved into a passion for creating 
                efficient, scalable solutions. I specialize in modern web technologies and enjoy the challenge 
                of turning ideas into reality through code.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Clean Code Advocate</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, well-documented code that scales
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate about algorithms and data structures
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Staying updated with the latest technologies and best practices
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}