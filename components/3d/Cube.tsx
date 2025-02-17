"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

export function Cube() {
  const groupRef = useRef<THREE.Group>(null);
  const spheres: { ref: React.RefObject<Mesh>; basePosition: Vector3 }[] = Array(40)
    .fill(0)
    .map((_, i) => ({
      ref: useRef<Mesh>(null),
      basePosition: new Vector3(
        Math.sin(i * 0.4) * 1.5,
        i * 0.2 - 4,
        Math.cos(i * 0.4) * 1.5
      ),
    }));

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    spheres.forEach((sphere, i) => {
      if (sphere.ref.current) {
        // Calculate dynamic position
        const y = sphere.basePosition.y + (time * 0.5) % 8 - 4;
        const x = Math.sin(i * 0.4 + time * 0.5) * 1.5;
        const z = Math.cos(i * 0.4 + time * 0.5) * 1.5;
        
        sphere.ref.current.position.set(x, y, z);
        
        // Pulse effect
        const scale = 1 + Math.sin(time * 2 + i * 0.5) * 0.1;
        sphere.ref.current.scale.setScalar(scale);
      }
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Spheres */}
      {spheres.map((sphere, i) => (
        <mesh key={i} ref={sphere.ref} position={sphere.basePosition.toArray()}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#EC4899" : "#60A5FA"}
            emissive={i % 2 === 0 ? "#EC4899" : "#60A5FA"}
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Outer glow spheres */}
      {Array(8).fill(0).map((_, i) => (
        <mesh
          key={`glow-${i}`}
          position={[
            Math.sin(i * Math.PI * 0.25) * 2.5,
            0,
            Math.cos(i * Math.PI * 0.25) * 2.5,
          ]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}