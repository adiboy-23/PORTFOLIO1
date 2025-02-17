"use client";

import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Loading from "@/components/Loading";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Nav />
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
}