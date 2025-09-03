import Hero from "@/components/ui/neural-network-hero";

export default function DemoOne() {
  return (
    <Hero 
      title="Nam Bouchara Developer"
      description="Passionate Python & JavaScript expert creating efficient, scalable solutions. Bringing ideas to life through clean code, problem-solving, and full-stack development."
      badgeText="Full Stack Developer"
      badgeLabel="Portfolio"
      ctaButtons={[
        { 
          text: "View Experience", 
          href: "#experience", 
          primary: true
        },
        { 
          text: "Get In Touch", 
          href: "mailto:nam.bouchara@example.com"
        }
      ]}
      microDetails={["Python & JavaScript", "Clean Code", "Problem Solver"]}
    />
  );
}

export { DemoOne as Preview }