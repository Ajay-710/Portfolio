"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Code, Award, ExternalLink, GraduationCap } from "lucide-react";

const certificationsData = [
  {
    category: "Cybersecurity",
    icon: <Shield size={20} />,
    items: [
      { title: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council", year: "2024", link: "https://drive.google.com/file/d/11NwASGfEzgm7O3WpcKZ2ZglD7JhHpO39/view" },
      { title: "Introduction to Ethical Hacking", issuer: "Great Learning", year: "2022", link: "https://drive.google.com/file/d/1ag9jvbxAYQitYUqq1kyN8xwkj-wjS5o6/view" },
      { title: "Internet / Cyber Security Crash Course", issuer: "apnaLearn", year: "2023", link: "https://drive.google.com/file/d/1Lr2JsuAkxoqLbJ28M93hQgGTX81BGpb0/view" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain size={20} />,
    items: [
      { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1XRS8dMGdhddS8tI5D32Rwlp3-9jgTRFe/view" },
      { title: "Introduction to Deep Learning", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1nRDQS6TRy-VbY3RIMu-zSzSgWGbJT03h/view" },
      { title: "Introduction to Natural Language Processing", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1lkChC8gms5P3hMdOWTxrlwI7_c1Y9zEV/view" },
      { title: "Introduction to OpenAI GPT Models", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1xUn5QoUSILuXj0C2S1woWRNNPBj6yVYb/view" },
      { title: "Prompt Engineering", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1FL1iPEJYh7XXUJ5lNrvL3jkQ0JWadZmZ/view" },
      { title: "Computer Vision 101", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1RnOcAV7BUavJEmPpEr-m8mb51wwVyjDK/view" },
      { title: "Introduction to Robotic Process and Automation", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1qKKgNTn1oDdnlEitfzVwQ6dzx5DVHPdo/view" }
    ]
  },
  {
    category: "Programming & Data",
    icon: <Code size={20} />,
    items: [
      { title: "Basics of Python", issuer: "Infosys Springboard", year: "2022", link: "https://drive.google.com/file/d/1NQlqZuy9gJQ4u6EjxKOnHvquzTWkNBRl/view" },
      { title: "Introduction to Data Science", issuer: "Infosys Springboard", year: "2026", link: "https://drive.google.com/file/d/1_G-2QDZ0DnGZkoVhFeQBeJqMEubbz2Vi/view" },
      { title: "Developing with Blockchain", issuer: "Infosys Springboard", year: "2023", link: "https://drive.google.com/file/d/1M_hDuN7WU6wnP-lpy3XLv6pSmySBtyxR/view" },
      { title: "Learn Big Data Basics", issuer: "Udemy", year: "2023", link: "https://drive.google.com/file/d/1OmPak5h5tAScZbIduo2VDDQeGiZ1UoWV/view" }
    ]
  },
  {
    category: "Others",
    icon: <Award size={20} />,
    items: [
      { title: "AI & Automation in MS Excel", issuer: "Skill Nation", year: "2024", link: "https://drive.google.com/file/d/1AOubTXam578j9yU86gv2srfIGi0X3sgE/view" }
    ]
  }
];

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState(certificationsData[0].category);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-20 right-[-10%] w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[25rem] h-[25rem] bg-accent-2/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6">
            <GraduationCap size={20} className="text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">Continuous Learning</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg">
            Professional certifications validating my expertise in cybersecurity, AI/ML, and modern programming.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certificationsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat.category
                  ? "bg-accent/10 border-accent text-accent shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                  : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:text-foreground hover:border-white/20"
                }`}
            >
              {cat.icon}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificationsData
                .find((cat) => cat.category === activeCategory)
                ?.items.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 relative group flex flex-col h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold text-foreground/90 mb-4 leading-tight group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col gap-2.5 text-sm text-foreground/60 font-medium">
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-2" />
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-2 transition-colors group/link"
                      >
                        View Certificate
                        <ExternalLink size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
