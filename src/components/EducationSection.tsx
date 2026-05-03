"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, BookOpen, Shield } from "lucide-react";

export default function EducationSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-[-10%] w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6">
            <GraduationCap size={20} className="text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">Academic Background</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Education <span className="text-gradient">& Certifications</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="glass-card p-10 rounded-3xl hover:border-accent/40 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold tracking-tight text-foreground/90 group-hover:text-accent transition-colors">Alpha College of Engineering</h3>
                <p className="text-foreground/70 font-medium text-lg">Bachelor's Degree in Information Technology</p>
                <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 bg-accent/10 text-accent rounded-lg font-bold border border-accent/20">
                  <span className="text-sm tracking-wide">CGPA:</span> 8.47
                </div>
              </div>
              <div className="text-left md:text-right space-y-2">
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-wider uppercase">
                  Sep 2023 - May 2027
                </div>
                <div className="text-foreground/50 text-sm font-medium">Chennai, TN</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mt-1 shrink-0 bg-accent/10 p-3 rounded-xl text-accent ring-1 ring-accent/20">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground/90 mb-2 text-lg tracking-tight">Coursework</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Data Structures and Algorithms, Data Science, Database Management Systems, Object Oriented Programming, Operating Systems, Artificial Intelligence, Machine Learning, Computer Vision, Python Programming, Full Stack Web Development.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mt-1 shrink-0 bg-accent-2/10 p-3 rounded-xl text-accent-2 ring-1 ring-accent-2/20">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground/90 mb-2 text-lg tracking-tight">Specialized Studies</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Cyber Security, Penetration Testing, Vulnerability Assessment, Generative AI, AI Agents, n8n, Firebase.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
