'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';
import { useControls } from 'leva';

interface Sizes {
  width: number;
  height: number;
  aspect: number;
  pixelRatio: number;
}

const BackgroundCanvas = () => {
  const [sizes, setSizes] = useState<Sizes>({
    width: 0,
    height: 0,
    pixelRatio: 1,
    aspect: 1,
  });

  /* debugger */
  const { bgColor } = useControls({ bgColor: '#ebebeb' });

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

    // 초기 설정
    resizeHandler();

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  // 초기 렌더링에서 sizes가 설정되지 않을 때 빈 화면 방지
  if (!sizes.width || !sizes.height) {
    return null; // 사이즈가 설정될 때까지 아무것도 렌더링하지 않음
  }

  return (
    <div>
      <Canvas
        id="key-canvas"
        style={{ width: sizes.width, height: sizes.height }}
        camera={{ position: [0, 0, 80], fov: 35, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <color attach="background" args={[bgColor]} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
