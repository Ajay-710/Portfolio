"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Dual-Agent Self-Refinement for Scalable Transcript-Based Summarization",
    issuer: "IEEE Journal",
    description: "Published a research paper.",
    link: null,
  },
  {
    title: "RAG-LLM Medical Report Analyzer: Simplifying Health Insights",
    issuer: "IJERT",
    description: "Published a research paper.",
    link: "https://www.ijert.org/rag-llm-medical-report-analyzer-simplifying-health-insights-ijertv15is052284",
  },
  {
    title: "Top 6 out of 256 teams nationally in MinT 2026",
    issuer: "IIT Madras and Bosch",
    description: "Provided with funding support.",
    link: null,
  }
];

export default function AchievementsSection() {
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
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border-2 border-foreground bg-background mb-6 neo-box">
            <Trophy size={20} className="text-accent" />
            <span className="text-sm font-bold tracking-wider uppercase text-foreground neo-text">Milestones</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground tracking-tight mb-6 neo-text">
            Achievements & <span className="text-accent">Publications</span>
          </h2>
          <p className="text-foreground max-w-2xl text-lg font-bold bg-background p-6 neo-box neo-text">
            Recognitions, hackathons, and published research works.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 neo-box relative group overflow-hidden transition-colors"
            >
              <div className="flex-1 pr-4 z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-foreground neo-text">
                  {achievement.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm font-bold text-foreground neo-text">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-foreground border border-foreground" />
                    {achievement.issuer}
                  </span>
                  {achievement.description && (
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-foreground border border-foreground" />
                      {achievement.description}
                    </span>
                  )}
                </div>
              </div>
              
              {achievement.link && (
                <div className="mt-6 md:mt-0 relative z-10">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-background text-foreground border-2 border-foreground font-bold hover:bg-foreground hover:text-background transition-colors neo-box neo-text text-sm whitespace-nowrap"
                  >
                    View Paper
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
