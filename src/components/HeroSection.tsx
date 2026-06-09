"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section id="home" className="min-h-[80vh] relative flex items-center justify-center pt-24 pb-10 overflow-hidden">
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background text-sm font-bold tracking-wide neo-box uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-foreground">Available for Internships</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 neo-text leading-snug">
            Hi, I&apos;m <br className="md:hidden" />
            <span className="text-accent">Pendem Ajay</span>
          </motion.h1>
          
          <motion.h2 variants={item} className="text-xl md:text-2xl text-foreground font-medium mb-8 max-w-3xl leading-relaxed border-b-2 border-foreground pb-4 inline-block">
            Cyber Security Enthusiast, AI Engineer & n8n Automation Pro
          </motion.h2>
          
          <motion.p variants={item} className="text-foreground max-w-2xl text-lg mb-12 font-bold leading-relaxed bg-background p-6 neo-box">
            I don&apos;t just find vulnerabilities; I build the AI that hunts them. Bridging the gap between offensive security and intelligent automation. If your system can be broken, I&apos;ll find a way. If it can be automated, I&apos;ve already done it.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-6 mb-14">
            <a href="/resume.pdf" download="Pendem_Ajay_Resume.pdf" className="neo-box px-8 py-4 bg-accent text-background hover:bg-foreground hover:text-background font-bold flex items-center gap-2 neo-text text-sm">
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <a href="mailto:pendemajay7@gmail.com" className="neo-box px-8 py-4 bg-background text-foreground hover:bg-accent hover:text-background font-bold flex items-center gap-2 neo-text text-sm">
              <Mail size={18} />
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Ajay-710" target="_blank" rel="noreferrer" className="neo-box px-8 py-4 bg-background text-foreground hover:bg-accent hover:text-background flex items-center gap-2 font-bold neo-text text-sm">
              <FaGithub size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/ajaypendem775" target="_blank" rel="noreferrer" className="neo-box px-8 py-4 bg-background text-foreground hover:bg-accent hover:text-background flex items-center gap-2 font-bold neo-text text-sm">
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </motion.div>
          
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-8 text-foreground/50 text-sm font-medium">
            <div className="flex items-center gap-2 hover:text-foreground/80 transition-colors cursor-default"><MapPin size={16} className="text-accent" /> Chennai - 600099</div>
            <div className="flex items-center gap-2 hover:text-foreground/80 transition-colors cursor-default"><Phone size={16} className="text-accent" /> +91 7845934542</div>
            <div className="flex items-center gap-2 hover:text-foreground/80 transition-colors cursor-default"><Mail size={16} className="text-accent" /> pendemajay7@gmail.com</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
