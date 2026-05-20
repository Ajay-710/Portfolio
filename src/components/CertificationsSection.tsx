"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Code, Award, ExternalLink, GraduationCap, Cloud } from "lucide-react";

const certificationsData = [
  {
    category: "Cybersecurity",
    icon: <Shield size={20} />,
    items: [
      { title: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council", year: "2024", link: "https://drive.google.com/file/d/11NwASGfEzgm7O3WpcKZ2ZglD7JhHpO39/view" },
      { title: "Introduction to Ethical Hacking", issuer: "Great Learning", year: "2022", link: "https://drive.google.com/file/d/1ag9jvbxAYQitYUqq1kyN8xwkj-wjS5o6/view" },
      { title: "Internet / Cyber Security Crash Course", issuer: "AptLearn", year: "2023", link: "https://drive.google.com/file/d/1Lr2JsuAkxoqLbJ28M93hQgGTX81BGpb0/view" }
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
    category: "Google Cloud",
    icon: <Cloud size={20} />,
    items: [
      { title: "Introduction to Generative AI", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/18177682" },
      { title: "Develop Gen AI Apps with Gemini and Streamlit", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/15650039" },
      { title: "Explore Generative AI with the Gemini API in Vertex AI", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/15648555" },
      { title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/15511282" },
      { title: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/15014834" },
      { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", year: "2025", link: "https://www.skills.google/public_profiles/bc37325e-4068-438d-97b1-0cd3051359a2/badges/14825790" },
      { title: "Elastic Google Cloud Infrastructure: Scaling and Automation", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23338349" },
      { title: "Essential Google Cloud Infrastructure: Core Services", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23336637" },
      { title: "Build Infrastructure with Terraform on Google Cloud", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23333944" },
      { title: "Develop Your Google Cloud Network", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23239154" },
      { title: "Essential Google Cloud Infrastructure: Foundation", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23234316" },
      { title: "Set Up an App Dev Environment on Google Cloud", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23221800" },
      { title: "Implementing Cloud Load Balancing for Compute Engine", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23206723" },
      { title: "Getting Started with Google Kubernetes Engine", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23195868" },
      { title: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23193489" },
      { title: "Preparing for Your Associate Cloud Engineer Journey", issuer: "Google Cloud", year: "2026", link: "https://www.skills.google/public_profiles/1bc4673d-3f5e-4f9f-8661-cff702481f47/badges/23071702" }
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

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-foreground bg-background mb-6 neo-box">
            <GraduationCap size={20} className="text-accent" />
            <span className="text-sm font-bold tracking-wider uppercase text-foreground neo-text">Continuous Learning</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight neo-text">
            Licenses & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-foreground max-w-2xl text-lg font-bold neo-text">
            Professional certifications validating my expertise in cybersecurity, AI/ML, and modern programming.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certificationsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-300 border-2 border-foreground neo-text ${activeCategory === cat.category
                  ? "bg-accent text-accent-foreground neo-box"
                  : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground neo-box"
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
                    className="neo-box p-6 relative group flex flex-col h-full bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-accent-foreground transition-colors neo-text">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col gap-2.5 text-sm text-foreground font-bold group-hover:text-accent-foreground neo-text">
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-foreground group-hover:bg-accent-foreground border border-foreground" />
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-foreground group-hover:bg-accent-foreground border border-foreground" />
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-8 pt-6 border-t-2 border-foreground">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-accent-foreground transition-colors group/link neo-text"
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
