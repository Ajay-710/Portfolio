"use client";

import { motion, Variants } from "framer-motion";
import { Wrench, Book, Laptop, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Libraries",
    icon: <Book size={24} />,
    skills: ["Pandas", "OpenCV", "PyTorch", "Mathplotlib", "Numpy"]
  },
  {
    title: "Tools",
    icon: <Wrench size={24} />,
    skills: ["n8n", "Gemini API", "Streamlit", "OpenAI ChatGPT", "Grok", "Nmap", "Burpsuite", "hydra", "wifite", "metasploit framework"]
  },
  {
    title: "Languages & Others",
    icon: <Laptop size={24} />,
    skills: ["C/C++", "Python", "SQL", "Git/Github", "Kali Linux", "Firebase"]
  },
  {
    title: "Soft Skills",
    icon: <Brain size={24} />,
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

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-foreground bg-background mb-6 neo-box">
            <Wrench size={20} className="text-accent" />
            <span className="text-sm font-bold tracking-wider uppercase text-foreground neo-text">Capabilities</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight neo-text">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-foreground max-w-2xl text-lg font-bold neo-text">
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
              className="neo-box p-8 relative group overflow-hidden"
            >
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <span className="text-3xl bg-background p-3 border-2 border-foreground group-hover:bg-accent transition-colors duration-300">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight neo-text">
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
                    className="px-4 py-2 bg-background border-2 border-foreground text-sm font-bold text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default neo-text"
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
