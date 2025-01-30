import { useEffect, useRef } from 'react';
import { Mesh, ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { vertex, fragment } from './shader';
import { useAspect, useTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';

const time = 0.1;
const amplitude = 0.35;
const waveLength = 6.8;

const PlaneMesh = () => {
  const plane = useRef<Mesh>(null);

  /* Texture */
  const texture = useTexture('/assets/images/profile.jpg');
  const { width, height } = texture?.image || { width: 1, height: 1 }; // 기본값 추가
  const scale = useAspect(width, height, 0.65);

  /* Uniforms */
  const uniforms = useRef({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useGSAP(() => {
    if (plane.current) {
      plane.current.rotateZ((Math.PI / 180) * 10);
    }
  });

  useFrame(() => {
    if (plane.current) {
      const material = plane.current.material as ShaderMaterial;
      material.uniforms.uTime.value += time;
      material.uniforms.uWaveLength.value = waveLength;
      material.uniforms.uAmplitude.value = amplitude;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (plane.current) {
        if (window.innerWidth < 768) {
          plane.current.scale.set(scale[0] * 1.5, scale[1] * 1.5, 1);
        } else {
          plane.current.scale.set(scale[0], scale[1], 1);
        }
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scale]);

  if (!texture) return null;

  return (
    <>
      <mesh ref={plane} position={[0, 0, 0]} scale={scale}>
        <planeGeometry args={[1, 1, 35, 35]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms.current}
        />
      </mesh>
    </>
  );
};

export default PlaneMesh;
