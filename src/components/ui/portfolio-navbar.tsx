"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, MenuItem } from "./navbar-menu";

export default function PortfolioNavbar() {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
            >
              Hero Section
            </button>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
            >
              About Me
            </button>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
            >
              Featured Projects
            </button>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
            >
              My Journey
            </button>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-700 dark:text-neutral-200 hover:text-black transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}