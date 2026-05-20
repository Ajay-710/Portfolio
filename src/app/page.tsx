"use client";

import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-foreground antialiased selection:bg-accent/30 selection:text-accent">
      <nav className={`fixed top-0 inset-x-0 h-20 z-50 transition-all duration-500 ${scrolled ? "bg-background border-b-2 border-foreground" : "bg-transparent pt-4"}`}>
        <div className={`max-w-7xl mx-auto px-6 h-full flex items-center justify-between transition-all duration-500 ${scrolled ? "" : "border-2 border-foreground bg-background mx-4 px-6 neo-box"}`}>
          <a href="#home" className="text-2xl font-extrabold tracking-tighter text-foreground neo-text">
            Ajay<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold text-foreground neo-text uppercase tracking-wide">
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-accent transition-colors">Certifications</a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:pendemajay7@gmail.com" className="group flex items-center gap-2 px-5 py-2.5 bg-background text-foreground font-bold hover:bg-foreground hover:text-background transition-colors neo-box neo-text text-sm">
              <span>Hire Me</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </main>

      <footer className="py-16 relative overflow-hidden border-t-2 border-foreground bg-background">
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-foreground neo-text">
            Pendem Ajay
          </h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/Ajay-710" target="_blank" rel="noreferrer" className="p-4 bg-background border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground transition-colors neo-box">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/ajaypendem775" target="_blank" rel="noreferrer" className="p-4 bg-background border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground transition-colors neo-box">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:pendemajay7@gmail.com" className="p-4 bg-background border-2 border-foreground text-foreground hover:bg-accent hover:text-accent-foreground transition-colors neo-box">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-foreground font-bold tracking-wide neo-text">
            © {new Date().getFullYear()} Pendem Ajay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
