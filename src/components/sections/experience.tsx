"use client";

import TimeLine_01, { TimeLine_01Entry } from "@/components/ui/release-time-line";
import { GraduationCap, Code, Rocket, Trophy, Lightbulb, User } from "lucide-react";

const experienceEntries: TimeLine_01Entry[] = [
  {
    icon: User,
    title: "Portfolio Launch",
    subtitle: "Present • Current Project",
    description:
      "Successfully launched my personal portfolio website showcasing my development journey, projects, and skills. Built with Next.js, TypeScript, and modern UI components.",
    items: [
      "Modern React/Next.js portfolio with TypeScript",
      "Interactive timeline and project showcases",
      "Responsive design with Tailwind CSS",
      "Smooth animations with Framer Motion",
      "Professional branding and presentation",
    ],
    button: {
      url: "#",
      text: "View Portfolio",
    },
  },
  {
    icon: Trophy,
    title: "Full Stack Development Mastery",
    subtitle: "Recent Achievement • 2024",
    description:
      "Achieved proficiency in full-stack web development, successfully building end-to-end applications with modern technologies and best practices.",
    items: [
      "Built complete web applications from scratch",
      "Integrated frontend and backend technologies",
      "Implemented user authentication and databases",
      "Deployed applications to production",
      "Applied software engineering principles",
    ],
  },
  {
    icon: Code,
    title: "Advanced Programming Skills",
    subtitle: "Milestone • 2024",
    description:
      "Developed strong programming foundations in Python and JavaScript, focusing on problem-solving, data structures, and algorithms.",
    items: [
      "Mastered Python for backend development and automation",
      "Gained expertise in JavaScript and modern ES6+ features",
      "Solved 100+ coding challenges and algorithmic problems",
      "Learned React.js and component-based architecture",
      "Practiced clean code principles and design patterns",
    ],
  },
  {
    icon: Lightbulb,
    title: "First Programming Project",
    subtitle: "Beginning • Early 2024",
    description:
      "Completed my first significant programming project, marking the beginning of my coding journey and sparking my passion for software development.",
    items: [
      "Built first web application using HTML, CSS, and JavaScript",
      "Learned version control with Git and GitHub",
      "Discovered the power of programming to solve real problems",
      "Started contributing to open-source projects",
      "Joined developer communities and forums",
    ],
    button: {
      url: "#",
      text: "View First Project",
    },
  },
  {
    icon: GraduationCap,
    title: "Learning Journey Begins",
    subtitle: "Foundation • 2023-2024",
    description:
      "Started my computer science and programming education, laying the groundwork for my development career through structured learning and practice.",
    items: [
      "Completed foundational computer science courses",
      "Learned programming fundamentals and logic",
      "Studied data structures and algorithms",
      "Practiced problem-solving and analytical thinking",
      "Built strong mathematical and logical foundations",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="bg-secondary/5">
      <TimeLine_01
        title="My Journey & Experience"
        description="Follow my development journey from learning the fundamentals to building full-stack applications and launching my professional portfolio."
        entries={experienceEntries}
      />
    </div>
  );
}