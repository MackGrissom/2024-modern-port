import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';

const FloatingShape = () => {
  const meshRef = useRef();
  const circleRef = useRef();
  const [hovered, setHovered] = useState(false);

  const [boxRef] = useBox(() => ({
    mass: 1,
    position: [0, 0, 0],
    args: [13, 12, 1],
  }));

  useFrame(() => {
    // Add animation or interaction logic here
    // For example, you can rotate the shape over time
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }

    if (circleRef.current) {
      circleRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group>
      {/* Large Oval */}
      <mesh
        ref={meshRef}
        scale={hovered ? 1.5 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        receiveShadow
      >
        <torusBufferGeometry args={[6, 1.5, 32, 64]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0}
          color={hovered ? 'purple' : 'purple'}
        />
      </mesh>

      {/* Rotating Circle */}
      <mesh
        ref={circleRef}
        position={[0, 0, 1]} // Slightly above the oval
      >
        <torusBufferGeometry args={[2, 0.5, 32, 64]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0}
          color={hovered ? 'purple' : 'purple'}
        />
      </mesh>
    </group>
  );
};

export default FloatingShape;
