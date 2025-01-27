'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import PlaneMesh from '../PlaneMesh/PlaneMesh';

interface Sizes {
  width: number;
  height: number;
  aspect: number;
  pixelRatio: number;
}

const ProfileCanvas = () => {
  const [sizes, setSizes] = useState<Sizes>({
    width: 0,
    height: 0,
    pixelRatio: 1,
    aspect: 1,
  });

  /* debugger */
  const { profileCanvasBg } = useControls({ profileCanvasBg: '#ebebeb' });

  useEffect(() => {
    const resizeHandler = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        aspect: window.innerWidth / window.innerHeight,
      });
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  if (!sizes.width || !sizes.height) {
    return null;
  }

  return (
    <Canvas
      id="profile-canvas"
      style={{ width: '100%', height: 800, maxWidth: 1680 }}
      camera={{ position: [0, 0, 20], fov: 60, near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <color attach="background" args={[profileCanvasBg]} />
      <PlaneMesh />
    </Canvas>
  );
};

export default ProfileCanvas;
