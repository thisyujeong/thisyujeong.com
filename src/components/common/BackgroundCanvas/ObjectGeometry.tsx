import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import { useControls } from 'leva';

const ObjectGeometry = () => {
  const hdrTexture = useLoader(RGBELoader, '/assets/empty_warehouse_01_2k.hdr');
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree(); // UPDATED

  // const { torusColor } = useControls({ torusColor: '#c1c1c1' });

  useEffect(() => {
    if (hdrTexture) {
      hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
    }
  }, [hdrTexture]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;

      const scaleFactor = Math.min(viewport.width, viewport.height) / 60;
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[(Math.PI / 180) * 30, (Math.PI / 180) * 30, (Math.PI / 180) * 45]}
    >
      <torusGeometry args={[10, 4, 25, 40]} />
      <meshPhysicalMaterial
        roughness={0}
        transmission={1}
        thickness={1}
        envMap={hdrTexture}
        color={new THREE.Color('#c1c1c1')}
      />
    </mesh>
  );
};

export default ObjectGeometry;
