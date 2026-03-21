"use client";

import { motion } from "framer-motion";
import { 
  Monitor, Server, Database, Smartphone, 
  Paintbrush, AppWindow, Cpu, Cloud
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Monitor className="text-primary-500" size={24} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    icon: <Server className="text-accent-500" size={24} />,
    skills: ["Node.js", "Express", "Python", "REST APIs"]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="text-blue-400" size={24} />,
    skills: ["MySQL", "MongoDB", "MariaDB", "Vercel"]
  },
  {
    title: "Tools & Design",
    icon: <Paintbrush className="text-pink-500" size={24} />,
    skills: ["Git", "Figma", "VS Code"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-t border-white/20 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (i * 0.1) }}
                    className="flex items-center gap-2 text-foreground/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
