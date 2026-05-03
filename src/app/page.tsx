"use client";

import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground antialiased selection:bg-accent/30 selection:text-accent">
      <nav className={`fixed top-0 inset-x-0 h-20 z-50 transition-all duration-500 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent pt-4"}`}>
        <div className={`max-w-7xl mx-auto px-6 h-full flex items-center justify-between transition-all duration-500 ${scrolled ? "" : "glass rounded-2xl mx-4 px-6"}`}>
          <a href="#home" className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-2">
            Ajay<span className="text-foreground">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-foreground/70">
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          </div>
          <a href="mailto:pendemajay7@gmail.com" className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-foreground text-sm font-semibold hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-accent/50 hover:text-accent">
            <span>Hire Me</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </nav>

      <main className="flex flex-col">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <footer className="py-16 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-2">
            Pendem Ajay
          </h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/Ajay-710" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/ajaypendem775" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:pendemajay7@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-foreground/40 font-medium tracking-wide">
            © {new Date().getFullYear()} Pendem Ajay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
