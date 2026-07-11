"use client";

import { motion, Variants } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Medical Report Analyzer",
    tech: ["React", "AI Models", "Tailwind CSS", "Node.js"],
    date: "Aug 2025",
    githubName: "GitHub Project",
    githubLink: "https://github.com/Ajay-710/ai-medial-report",
    demoLink: "https://medical-frontend-sab0.onrender.com/",
    features: [
      "Developed a comprehensive web application for analyzing and managing complex medical reports using AI.",
      "Implemented a highly responsive user interface to ensure seamless accessibility for healthcare data.",
      "Integrated advanced AI models to extract critical insights and generate concise summaries from medical documents."
    ]
  },
  {
    title: "YouTube Video Summarizer Workflow",
    tech: ["n8n", "Node.js", "Gemini API", "GCP"],
    date: "Jul 2025",
    githubName: "GitHub Project",
    githubLink: "#",
    features: [
      "Built an automated workflow using n8n to summarize YouTube videos using GPT-4o.",
      "Fetched transcripts from a public API, chunked and merged text, and generated concise summaries.",
      "Integrated Telegram Bot to send summaries in real time via Webhook automation.",
    ]
  },
  {
    title: "Cyber security Threat Detection AI Agent",
    tech: ["Python", "scikit-learn", "Flask", "n8n", "Gmail API"],
    date: "Jun 2025",
    githubName: null,
    githubLink: null,
    features: [
      "Built an AI-powered agent that detects potential cyber threats by analyzing network traffic features using a machine learning model trained on the KDD dataset.",
      "Designed and deployed a Flask API to serve the model, integrated with an n8n automation workflow to receive inputs, evaluate predictions, and send alert emails only when suspicious activity is detected.",
      "Used a 41-feature input structure to reduce false positives and retrained the model using cleaner data for higher accuracy.",
    ]
  },
  {
    title: "Spam Classifier App",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    date: "Jun 2025",
    githubName: "GitHub Project",
    githubLink: "#",
    features: [
      "A machine learning project that classifies text messages (or emails) as either legitimate (ham) or malicious (spam). This project uses Natural Language Processing (NLP) techniques and is deployed as an interactive web application using Streamlit.",
      "Enables the support of JPG, PNG, PDF, DOCX and extracts EXIF data, author, creation date, etc.",
    ]
  }
];

export default function ProjectsSection() {
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
    <section id="projects" className="py-24 relative overflow-hidden">

      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-foreground bg-background mb-6 neo-box">
            <FolderGit2 size={20} className="text-accent" />
            <span className="text-sm font-bold tracking-wider uppercase text-foreground neo-text">Portfolio</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground tracking-tight mb-6 neo-text">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-foreground max-w-2xl text-lg font-bold bg-background p-6 neo-box">
            A showcase of my recent work in AI, automation, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex flex-col p-10 neo-box relative group overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8 relative z-10 w-full">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-foreground neo-text">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-foreground text-background border-2 border-foreground text-sm font-bold tracking-wide neo-text">
                    {project.date}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-2 border-foreground transition-colors neo-box">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="p-3 bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-2 border-foreground transition-colors neo-box">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-foreground leading-relaxed font-medium flex items-start gap-3 text-base">
                    <span className="inline-block text-accent mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5 mt-auto relative z-10 pt-6 border-t-2 border-foreground">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1.5 text-sm font-bold bg-background text-foreground border-2 border-foreground tracking-wide neo-text">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
