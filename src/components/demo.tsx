"use client"

import { LayoutGroup, motion } from "motion/react"

import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <section className="py-32 bg-background" id="hero">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-overusedGrotesk text-foreground font-light mb-8">
            <LayoutGroup>
              <motion.p className="flex whitespace-pre" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Nam Bouchara{" "}
                </motion.span>
                <TextRotate
                  texts={[
                    "Python Developer",
                    "JavaScript Expert",
                    "Problem Solver",
                    "Full Stack Developer",
                    "React Specialist"
                  ]}
                  mainClassName="text-white px-2 sm:px-2 md:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating efficient, scalable solutions and turning ideas into reality through code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export { Preview }