import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

const ObjectGeometry = () => {
  const hdrTexture = useLoader(RGBELoader, '/assets/empty_warehouse_01_2k.hdr');
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (hdrTexture) {
      hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
    }
  }, [hdrTexture]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[(Math.PI / 180) * 30, (Math.PI / 180) * 30, (Math.PI / 180) * 45]}
    >
      <torusGeometry args={[15, 6, 50, 100]} />
      <meshPhysicalMaterial
        roughness={0}
        transmission={1}
        thickness={1}
        envMap={hdrTexture}
      />
    </mesh>
  );
};

export default ObjectGeometry;
