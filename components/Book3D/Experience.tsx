'use client';

import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useAtom } from "jotai";
import { Book } from "./Book";
import { zoomedAtom } from "./UI";
import * as THREE from "three";

export const Experience = () => {
  const [zoomed] = useAtom(zoomedAtom);
  const controlsRef = useRef(null);
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      {/* Clean Corporate Environment */}
      <Environment preset="apartment" />
      
      {/* Main Professional Light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.15}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill Light */}
      <directionalLight
        position={[-3, 5, 3]}
        intensity={0.08}
        color="#f8f8f8"
      />
      
      {/* Clean Ambient */}
      <ambientLight intensity={0.15} color="#e8e8e8" />
      
      {/* Book */}
      <group ref={groupRef} position={[0, 0, 0]}>
        <Float
          rotation-x={-Math.PI / 4}
          floatIntensity={zoomed ? 0.05 : 0.15}
          speed={0.8}
          rotationIntensity={0}
        >
          <Book />
        </Float>
      </group>
      <OrbitControls 
        ref={controlsRef}
        target={[0, 0, 0]}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={0}
        maxDistance={Infinity}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 2}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={1}
        zoomSpeed={1.5}
        panSpeed={1}
        screenSpacePanning={true}
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN
        }}
      />
    </>
  );
};
