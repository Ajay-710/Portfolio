"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Intern",
    company: "eStride Digital.",
    date: "Jan 2026 - March 2026",
    location: "Hybrid",
    descriptions: [
      "Built end-to-end automation systems using n8n, Apify, and Google APIs, including an AI-powered sales prospecting engine that improved outreach efficiency by 10x.",
      "Developed automated content and reporting pipelines to generate branded SEO articles and bulk audit PDFs from raw data using webhooks, custom scripts, and visualization APIs."
    ]
  },
  {
    role: "Software Development Intern",
    company: "FlipFlex",
    date: "Oct 2025 - Jan 2026",
    location: "Hybrid",
    descriptions: [
      "Worked on real-time client projects building static webpages and web apps.",
      "Built a Cashier, Inventory management system for retail stores using React JS, Java, sprintboot, Firebase, Electron, Java H2 for web and desktop applications."
    ]
  },
  {
    role: "Intern - Cyber security",
    company: "The Red Users.",
    date: "Apr 2025",
    location: "Remote",
    descriptions: [
      "Network Security Fundamentals, gained hands-on experience with identifying network threats (viruses, worms, trojans, phishing), implementing basic security measures (firewall configuration, password hardening, WPA2/WPA3 encryption), and monitoring network traffic using Wireshark to detect suspicious activity."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-l from-accent-2/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6">
            <Briefcase size={20} className="text-accent" />
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/80">Career Path</span>
          </div>
          <h2 className="text-5xl font-extrabold text-foreground tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-accent/5 before:via-accent/20 before:to-accent/5 before:rounded-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow-[0_0_15px_rgba(14,165,233,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0 overflow-hidden transform group-hover:scale-125 transition-all duration-300 z-10">
                <Briefcase size={16} />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-12 md:ml-0 p-8 rounded-3xl glass-card hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300">
                <div className="flex flex-col mb-5 gap-1.5">
                  <h3 className="font-extrabold text-2xl text-foreground/90 tracking-tight">{exp.role}</h3>
                  <div className="text-accent font-bold text-lg">{exp.company}</div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-foreground/70 font-medium">
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                      <Calendar size={14} className="text-accent" /> {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                      <MapPin size={14} className="text-accent-2" /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 pt-2 border-t border-white/10">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="text-sm text-foreground/70 leading-relaxed flex items-start">
                      <span className="text-accent mt-1.5 mr-3 w-1.5 h-1.5 bg-accent rounded-full shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
