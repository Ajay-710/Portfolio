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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-[-10%] w-[40rem] h-[40rem] bg-accent-2/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6">
            <FolderGit2 size={20} className="text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">Portfolio</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl text-lg">
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
              className={`flex flex-col glass-card p-10 rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40 transition-all duration-300 relative group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="flex justify-between items-start mb-8 relative z-10 w-full">
                <div className="flex-1 pr-4">
                  <h3 className="text-3xl font-bold tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-2 transition-colors">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-foreground/70 font-semibold tracking-wide">
                    {project.date}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 text-foreground/80 hover:text-accent rounded-xl border border-white/10 hover:border-accent hover:bg-accent/10 transition-colors shadow-sm">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 text-foreground/80 hover:text-accent rounded-xl border border-white/10 hover:border-accent hover:bg-accent/10 transition-colors shadow-sm">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-foreground/80 leading-relaxed font-medium flex items-start gap-3 text-base">
                    <span className="inline-block text-accent mt-1 opacity-80">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5 mt-auto relative z-10 pt-6 border-t border-white/10">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1.5 text-sm font-semibold bg-accent/10 text-accent rounded-xl border border-accent/20 tracking-wide">
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
