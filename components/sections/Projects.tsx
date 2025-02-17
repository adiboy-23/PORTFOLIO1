"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Blockchain Voting System",
    description: "A decentralized voting system built on Ethereum blockchain ensuring transparent and secure elections.",
    tech: ["Solidity", "React", "Web3.js", "Ethereum"],
    github: "https://github.com/adiboy-23/blockchain-voting",
    live: "#"
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracking application with price alerts and analytics.",
    tech: ["React Native", "Node.js", "MongoDB", "CoinGecko API"],
    github: "https://github.com/adiboy-23/crypto-tracker",
    live: "#"
  },
  {
    title: "Smart Contract Marketplace",
    description: "NFT marketplace allowing users to mint, buy, and sell digital assets.",
    tech: ["Next.js", "Solidity", "IPFS", "Hardhat"],
    github: "https://github.com/adiboy-23/nft-marketplace",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/40 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}