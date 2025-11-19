import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX types for React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshToonMaterial: any;
      meshBasicMaterial: any;
      boxGeometry: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      ambientLight: any;
      directionalLight: any;
    }
  }
}

// Abstract Geometric Object (Neo-Brutalist Artifact)
const NeoArtifact = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && wireframeRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.5;
      meshRef.current.rotation.y += 0.01;
      
      wireframeRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.5;
      wireframeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group scale={1.5}>
        {/* Solid Core */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2, 0]} />
          <meshToonMaterial color="#FF5790" />
        </mesh>
        
        {/* Wireframe Cage */}
        <mesh ref={wireframeRef} scale={1.1}>
          <icosahedronGeometry args={[2, 0]} />
          <meshBasicMaterial color="#121212" wireframe />
        </mesh>

        {/* Orbiting Cube */}
        <mesh position={[3, 0, 0]} rotation={[0, 0, 0.5]}>
           <boxGeometry args={[1, 1, 1]} />
           <meshToonMaterial color="#FFDE59" />
           <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
              <lineBasicMaterial color="#121212" linewidth={2} />
           </lineSegments>
        </mesh>
      </group>
    </Float>
  );
};

const SpaceScene: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full z-0 pointer-events-none opacity-20 lg:opacity-100 lg:w-1/2 lg:left-1/2">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <NeoArtifact />
      </Canvas>
    </div>
  );
};

export default SpaceScene;