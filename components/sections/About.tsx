"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Blocks } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer currently pursuing my education at PES University, Bangalore. 
              My journey in technology is driven by a deep fascination with blockchain technology and app development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <GraduationCap className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold">Education</h4>
                <p className="text-gray-400">PES University, Bangalore</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Code className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold">Development</h4>
                <p className="text-gray-400">Full-stack & Mobile Development</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <Blocks className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold">Blockchain</h4>
                <p className="text-gray-400">Web3 & Smart Contracts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}