"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { Cube } from "@/components/3d/Cube";

export default function Hero() {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight
            position={[0, 0, 10]}
            intensity={1}
            penumbra={1}
            angle={0.5}
            decay={2}
          />
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Cube />
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      <div className="z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
        >
          Aditya Kadian
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Software Engineer | Blockchain Enthusiast
        </motion.p>
      </div>
    </section>
  );
}