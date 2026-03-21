"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-6 w-6 text-primary-500" />,
    title: "Clean Architecture",
    description: "I write clean, maintainable, and scalable code following best practices and design patterns."
  },
  {
    icon: <Palette className="h-6 w-6 text-accent-500" />,
    title: "Pixel Perfect",
    description: "Obsessive attention to detail ensuring designs are perfectly translated into functional components."
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "High Performance",
    description: "Optimizing applications for maximum speed and scalability across all devices."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              Hi there! I'm a passionate Full Stack Developer with over <span className="font-semibold text-white">2 years</span> of experience in building modern web applications. I specialize in JavaScript and have a strong command of frameworks like React, Next.js, and Node.js. My journey in web development has been fueled by a love for creating seamless user experiences and writing clean, efficient code.
            </p>
            <p>
              Currently, my focus is on building robust and scalable digital products that provide exceptional user experiences. I thrive in environments where creativity meets logical problem solving.
            </p>
            <p>
              When I'm not traversing the DOM, you can find me exploring the great outdoors, brewing the perfect cup of cold coffee, or reading up on the latest tech innovations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6 sm:grid-cols-1"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
