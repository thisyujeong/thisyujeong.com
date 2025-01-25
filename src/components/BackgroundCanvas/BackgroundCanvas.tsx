'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';

interface Sizes {
  width: number;
  height: number;
  aspect: number;
  pixelRatio: number;
}

const initialSizes: Sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
  aspect: window.innerWidth / window.innerHeight,
};

const BackgroundCanvas = () => {
  const [sizes, setSizes] = useState<Sizes>(initialSizes);

  // canvas resizing handle
  useEffect(() => {
    const resizeHandler = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        aspect: window.innerWidth / window.innerHeight,
      });
    };
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <div>
      <Canvas
        id="key-canvas"
        style={{ width: sizes.width, height: sizes.height }}
        camera={{ position: [0, 0, 80], fov: 35, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <color attach="background" args={['#131313']} />

        {/* <color attach="background" args={['#ebebeb']} /> */}
        <Particles />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
