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

      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-foreground bg-background mb-6 neo-box">
            <GraduationCap size={20} className="text-accent" />
            <span className="text-sm font-bold tracking-wider uppercase text-foreground neo-text">Academic Background</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight neo-text">
            Education <span className="text-accent">& Certifications</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="p-10 neo-box relative group overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight text-foreground neo-text">Alpha College of Engineering</h3>
                <p className="text-foreground font-medium text-lg">Bachelor&apos;s Degree in Information Technology</p>
                <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 bg-background text-foreground border-2 border-foreground font-bold neo-text">
                  <span className="text-sm tracking-wide">CGPA:</span> 8.47
                </div>
              </div>
              <div className="text-left md:text-right space-y-2">
                <div className="inline-block px-4 py-1.5 border-2 border-foreground bg-background text-sm font-bold tracking-wider uppercase neo-text">
                  Sep 2023 - May 2027
                </div>
                <div className="text-foreground text-sm font-bold neo-text">Chennai, TN</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="flex gap-4 items-start p-6 bg-background border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors neo-box group/card">
                <div className="mt-1 shrink-0 bg-background text-foreground border-2 border-foreground p-3">
                  <BookOpen size={20} className="group-hover/card:text-accent-foreground text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground group-hover/card:text-accent-foreground mb-2 text-lg tracking-tight neo-text">Coursework</h4>
                  <p className="text-foreground font-medium text-sm leading-relaxed group-hover/card:text-accent-foreground">
                    Data Structures and Algorithms, Data Science, Database Management Systems, Object Oriented Programming, Operating Systems, Artificial Intelligence, Machine Learning, Computer Vision, Python Programming, Full Stack Web Development.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-background border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors neo-box group/card2">
                <div className="mt-1 shrink-0 bg-background text-foreground border-2 border-foreground p-3">
                  <Shield size={20} className="group-hover/card2:text-accent-foreground text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground group-hover/card2:text-accent-foreground mb-2 text-lg tracking-tight neo-text">Specialized Studies</h4>
                  <p className="text-foreground font-medium text-sm leading-relaxed group-hover/card2:text-accent-foreground">
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
