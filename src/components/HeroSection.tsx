"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section id="home" className="min-h-[80vh] relative flex items-center justify-center pt-24 pb-10 overflow-hidden">
      {/* Light Bar / Lamp Effect */}
      <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center pointer-events-none">
        <div className="absolute top-0 z-0 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

        {/* Main glow */}
        <div className="absolute inset-auto z-10 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-accent/60 opacity-80 blur-3xl" />

        {/* Lamp effect */}
        <motion.div
          initial={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "16rem" }}
          className="absolute top-0 z-20 h-36 -translate-y-[20%] rounded-full bg-accent/60 blur-2xl"
        />

        {/* Top line */}
        <motion.div
          initial={{ width: "15rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem" }}
          className="absolute inset-auto z-20 h-0.5 -translate-y-[-10%] bg-accent/60"
        />

        {/* Left gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] from-accent/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"
        />

        {/* Right gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-accent/60 [--conic-position:from_290deg_at_center_top] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"
        />
      </div>
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-foreground/80">Available for Internships</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient drop-shadow-sm">Pendem Ajay</span>
          </motion.h1>
          
          <motion.h2 variants={item} className="text-xl md:text-2xl text-foreground/70 font-medium mb-8 max-w-3xl leading-relaxed">
            Cyber Security Enthusiast, <span className="text-foreground/90">AI Engineer</span> & <span className="text-accent">n8n Automation Pro</span>
          </motion.h2>
          
          <motion.p variants={item} className="text-foreground/50 max-w-2xl text-lg mb-12 font-light leading-relaxed italic">
            "Just a dev who automates the boring stuff so I can spend more time breaking and fixing things. 🤖 n8n addict, AI agent whisperer, and professional bug generator. If it’s not automated, it’s not finished. 🚀 Building the future, no cap. 💯"
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-5 mb-14">
            <a href="mailto:pendemajay7@gmail.com" className="group relative px-8 py-4 rounded-2xl bg-foreground text-background font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <Mail size={18} />
              <span>Contact Me</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Ajay-710" target="_blank" rel="noreferrer" className="glass px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-white/10 hover:scale-105 transition-all duration-300 font-medium text-foreground/90">
              <FaGithub size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/ajaypendem775" target="_blank" rel="noreferrer" className="glass px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-white/10 hover:scale-105 transition-all duration-300 font-medium text-foreground/90">
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
