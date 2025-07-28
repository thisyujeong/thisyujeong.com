'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import classnames from 'classnames/bind';
import styles from './PhysicsCanvas.module.scss';

const cx = classnames.bind(styles);

export default function PhysicsCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const floorDepth = 30;
    const floorDepthHalf = floorDepth / 2;

    // 엔진 및 렌더러 생성
    const engine = Matter.Engine.create();
    engine.gravity.y = 2.0;

    const render = Matter.Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        background: 'transparent',
        showSeparations: true,
        wireframes: false,
      },
    });

    // 벽 생성
    const floorBottom = Matter.Bodies.rectangle(
      centerX,
      height - floorDepthHalf,
      width,
      floorDepth,
      {
        isStatic: true,
        render: { fillStyle: '#f5351f' },
      },
    );
    const floorRight = Matter.Bodies.rectangle(floorDepthHalf, centerY, floorDepth, height, {
      isStatic: true,
      render: { fillStyle: '#f5351f' },
    });
    const floorLeft = Matter.Bodies.rectangle(width - floorDepthHalf, centerY, floorDepth, height, {
      isStatic: true,
      render: { fillStyle: '#f5351f' },
    });

    // 물리 객체 생성
    const element = Matter.Bodies.rectangle(centerX, 50, 300, 100, {
      chamfer: { radius: [50, 50] },
      render: { fillStyle: '#111111' },
      restitution: 0.5,
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // 마우스 제약 조건을 선택적으로 활성화/비활성화
    let isDragging = false;
    Matter.Events.on(mouseConstraint, 'mousedown', () => (isDragging = true));
    Matter.Events.on(mouseConstraint, 'mouseup', () => (isDragging = false));

    // 드래그 중이 아닐 때 스크롤 허용
    const handleWheel = (event: WheelEvent) => {
      if (!isDragging) event.stopPropagation();
    };

    // 캔버스에 휠 이벤트 리스너 추가 (capture phase에서 처리)
    if (render.canvas) {
      render.canvas.addEventListener('wheel', handleWheel, { capture: true });
    }

    Matter.World.add(engine.world, [floorBottom, floorRight, floorLeft, element, mouseConstraint]);

    // 엔진 업데이트
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);
    Matter.Body.rotate(element, Math.PI / 6);

    // 클린업
    return () => {
      if (render.canvas) {
        render.canvas.removeEventListener('wheel', handleWheel, { capture: true });
      }

      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      Matter.World.clear(engine.world, true);
      render.canvas?.remove();
      render.textures = {};
    };
  }, []);

  return <section ref={containerRef} className={cx('canvas-container')}></section>;
}
