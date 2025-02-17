"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          <a href="mailto:aditya.kadian@example.com" 
             className="p-4 bg-purple-500/10 rounded-full hover:bg-purple-500/20 transition-colors">
            <Mail className="text-purple-400" size={24} />
          </a>
          <a href="#" className="p-4 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors">
            <Github className="text-blue-400" size={24} />
          </a>
          <a href="#" className="p-4 bg-pink-500/10 rounded-full hover:bg-pink-500/20 transition-colors">
            <Linkedin className="text-pink-400" size={24} />
          </a>
          <a href="#" className="p-4 bg-cyan-500/10 rounded-full hover:bg-cyan-500/20 transition-colors">
            <Twitter className="text-cyan-400" size={24} />
          </a>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <textarea 
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}