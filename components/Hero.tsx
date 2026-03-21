"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-primary-500 font-medium tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, WORLD! I AM
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Yashasvi Saroha
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-4xl font-semibold mb-6 text-foreground/80 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gradient font-bold">{text}</span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-8 bg-primary-500 ml-1 translate-y-1"
            />
          </motion.div>
          
          <motion.p 
            className="text-foreground/60 text-lg mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build exceptional and accessible digital experiences for the web. Specialized in creating premium, high-performance web applications using modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="#projects" 
              className="glass px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 hover:border-primary-500/50 transition-all text-glow w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full font-medium flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 transition-all w-full sm:w-auto justify-center"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-spin-slow blur-xl opacity-50" />
            <div className="glass absolute inset-2 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
              {/* Avatar placeholder, replace with Image component when you have an actual image */}
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                <span className="text-6xl text-white/20 font-bold">YS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
