"use client";

import { motion } from "framer-motion";
import { Code2, Home, User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="flex gap-6 px-6 py-3 bg-black/20 backdrop-blur-lg rounded-full">
        <Link href="#home" className="text-white/70 hover:text-white transition-colors">
          <Home size={20} />
        </Link>
        <Link href="#about" className="text-white/70 hover:text-white transition-colors">
          <User size={20} />
        </Link>
        <Link href="#projects" className="text-white/70 hover:text-white transition-colors">
          <Code2 size={20} />
        </Link>
        <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
          <Mail size={20} />
        </Link>
      </div>
    </motion.nav>
  );
}