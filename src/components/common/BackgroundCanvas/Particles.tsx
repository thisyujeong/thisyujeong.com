'use client';

import { useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from '@/assets/shaders/vertex.glsl';
import fragmentShader from '@/assets/shaders/fragmentShader.glsl';

const Particles = () => {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();

  const count = 80;
  const times = 3;

  const positions = useMemo(() => {
    const array = new Float32Array(count * times);
    for (let i = 0; i < array.length; i += times) {
      array[i] = (Math.random() - 0.5) * count; // x
      array[i + 1] = (Math.random() - 0.5) * 40; // y
      array[i + 2] = (Math.random() - 0.5) * 40; // z
    }
    return array;
  }, [count, times]);

  const velocities = useMemo(() => {
    const array = new Float32Array(count * times);
    for (let i = 0; i < array.length; i += times) {
      array[i] = (Math.random() - 0.5) * 0.1; // x velocity
      array[i + 1] = (Math.random() - 0.5) * 0.1; // y velocity
      array[i + 2] = (Math.random() - 0.5) * 0.1; // z velocity
    }
    return array;
  }, [count, times]);

  const uniforms = useMemo(
    () => ({
      uSize: new THREE.Uniform(0.5),
      uResolution: new THREE.Uniform(
        new THREE.Vector2(size.width * viewport.dpr, size.height * viewport.dpr)
      ),
      uColor: new THREE.Uniform(new THREE.Color('#ffffff')),
    }),
    [size, viewport]
  );

  useFrame(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      const positionAttribute = geometry.attributes.position;
      for (let i = 0; i < positionAttribute.array.length; i += times) {
        // Update positions based on velocities
        positionAttribute.array[i] += velocities[i]; // x
        positionAttribute.array[i + 1] += velocities[i + 1]; // y
        positionAttribute.array[i + 2] += velocities[i + 2]; // z
        // Boundary check to keep particles within bounds
        if (positionAttribute.array[i] > 50 || positionAttribute.array[i] < -50)
          velocities[i] *= -1;
        if (positionAttribute.array[i + 1] > 40 || positionAttribute.array[i + 1] < -40)
          velocities[i + 1] *= -1;
        if (positionAttribute.array[i + 2] > 40 || positionAttribute.array[i + 2] < -40)
          velocities[i + 2] *= -1;
      }
      positionAttribute.needsUpdate = true;
    }
    if (ref.current) {
      const material = ref.current.uniforms;
      if (material.uResolution) {
        material.uResolution.value.set(
          size.width * viewport.dpr,
          size.height * viewport.dpr
        );
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / times}
          itemSize={times}
          normalized={false}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </points>
  );
};

export default Particles;
