"use client";

import { motion, Variants } from "framer-motion";
import { Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Libraries",
    icon: "📚",
    skills: ["Pandas", "OpenCV", "PyTorch", "Mathplotlib", "Numpy"]
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["n8n", "Gemini API", "Streamlit", "OpenAI ChatGPT", "Grok", "Nmap", "Burpsuite", "hydra", "wifite", "metasploit framework"]
  },
  {
    title: "Languages & Others",
    icon: "💻",
    skills: ["C/C++", "Python", "SQL", "Git/Github", "Kali Linux", "Firebase"]
  },
  {
    title: "Soft Skills",
    icon: "🧠",
    skills: ["Interpersonal communication", "Problem solving", "Creativity", "Observation", "Imagination"]
  }
];

export default function SkillsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-40 right-[-10%] w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[25rem] h-[25rem] bg-accent-2/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6">
            <Wrench size={20} className="text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">Capabilities</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg">
            A comprehensive overview of the tools, technologies, and skills I leverage to build robust solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-3xl p-8 hover:border-accent/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <span className="text-3xl bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-foreground/90 tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5 relative z-10"
              >
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={item}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-foreground/70 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
