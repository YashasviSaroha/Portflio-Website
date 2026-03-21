import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-glow mb-6">
          Portfolio<span className="text-primary-500">.</span>
        </Link>
        
        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/YashasviSaroha" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary-500 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yashasvi-saroha" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary-500 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary-500 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a> */}
          <a href="mailto: yashasvisaroha24@gmail.com" className="text-foreground/60 hover:text-primary-500 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        <p className="text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} Yashasvi Saroha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
