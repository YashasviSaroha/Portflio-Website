"use client";

import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  // {
  //   type: "work",
  //   title: "Senior Frontend Engineer",
  //   organization: "Tech Innovators Inc.",
  //   date: "2021 - Present",
  //   description: "Lead the frontend team in developing the company's core SaaS product. Improved render performance by 40% and established a comprehensive design system."
  // },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Freelance",
    date: "2024 - 2026",
    description: "Developed and maintained multiple projects made by me."
    // description: "Developed and maintained multiple high-traffic e-commerce websites. Integrated payment gateways, optimized SEO, and improved conversion rates."
  },
  {
    type: "participation",
    title: "Hackathon Winnings and participation",
    organization: "Open",
    date: "2024 - 2026",
    description: "Participated in multiple hackathons and reached the finals in some of them."
    // description: "Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction."
  },
  {
    type: "education",
    title: "B.Tech. in Computer Science",
    organization: "Indraprasta Institute of Technology, Delhi",
    date: "2024 - 2028",
    description: "Currently pursuing a Bachelor's degree in Computer Science. "
    // description: "Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-0 w-5 h-5 rounded-full bg-background border-4 border-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />

              <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12 hidden md:block" />
                
                <div className={`md:w-5/12 glass p-6 rounded-2xl hover:border-primary-500/50 transition-colors relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex items-center gap-2 mb-2 text-primary-500 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    {exp.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                    <span className="font-semibold">{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-foreground/80 font-medium mb-4">{exp.organization}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
