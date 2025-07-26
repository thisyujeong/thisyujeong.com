import { useEffect, useState, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './MouseTrailSVG.module.scss';

const cx = classnames.bind(styles);

/* Trail */
const TAIL_DURATION = 100; // 마우스 라인 흔적 지속 시간 (ms)
const TRAIL_COLOR = '#28d36a';
const TRAIL_WIDTH = 4;

/* Circle */
const CIRCLE_COLOR = '#28d36a';
const BASE_RADIUS = 6;
const MIN_RADIUS = 3;
const HOVER_RADIUS = 12; // 마우스 hover 상태
const DOWN_RADIUS = 4; // 마우스 press 상태
const HOVER_DOWN_RADIUS = 10; // 마우스 hover & press 상태
const RESTORE_SPEED = 0.09; // 반지름 보간 속도

/**
 * 주어진 좌표 배열을 기반으로 부드러운 곡선(SVG path)을 생성
 * @param points 마우스 포인터 {x, y} 좌표
 * @returns SVG path의 d 속성에 들어갈 문자열
 */
function getSmoothPath(points: { x: number; y: number }[]) {
  // path를 그릴 포인트 개수가 2보다 적으면 그릴 수 없음 - 빈 문자열 반환
  if (points.length < 2) return '';

  // 시작점 M(from, to) - Move to
  let d = `M${points[0].x},${points[0].y}`;

  // 포인트가 2개뿐인 경우 직선으로 처리
  if (points.length === 2) {
    d += ` L${points[1].x},${points[1].y}`;
    return d;
  }

  // 포인트가 2개 이상인 경우 곡선 처리
  for (let i = 1; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const cpx = (p1.x + p2.x) / 2;
    const cpy = (p1.y + p2.y) / 2;
    d += ` Q${p1.x},${p1.y} ${cpx},${cpy}`; // p1과 p2의 중간점을 curve 끝점으로 사용
  }

  // 마지막 포인트까지 직선 연결
  d += ` L${points[points.length - 1].x},${points[points.length - 1].y}`;
  return d;
}

const MouseTrailSVG = () => {
  const [points, setPoints] = useState<{ x: number; y: number; createdAt: number }[]>([]); // 지나온 포인트 정보
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mouse, setMouse] = useState<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [radius, setRadius] = useState(BASE_RADIUS);
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const prevMouse = useRef<{ x: number; y: number; t: number } | null>(null);

  // 윈도우 크기 동기화
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 마우스 위치 및 Hover 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMouse({ x, y });

      // hover 감지: pointer 커서가 적용된 요소 위인지 확인
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      console.log(el?.tagName);

      if (el) {
        const isInteractive =
          el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.getAttribute('role') === 'button' ||
          !!el.onclick ||
          el.classList.contains('hover-target'); // 커스텀 기준 가능

        setIsHover(isInteractive);
      } else {
        setIsHover(false);
      }

      setPoints(prev => [...prev, { x, y, createdAt: Date.now() }]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 마우스 다운/업 추적
  useEffect(() => {
    const handleDown = () => setIsPress(true);
    const handleUp = () => setIsPress(false);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  // 오래된 포인트 제거 (항상 동작)
  // 16ms 간격으로 `TAIL_DURATION`ms 넘은 좌표를 제거함
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setPoints(prev => prev.filter(p => now - p.createdAt < TAIL_DURATION));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // 반지름 애니메이션
  useEffect(() => {
    let animationId: number;
    let stopped = false;

    function animate() {
      if (stopped) return;

      let targetRadius = BASE_RADIUS;

      if (isHover && isPress) targetRadius = HOVER_DOWN_RADIUS;
      // Hover
      else if (isHover) targetRadius = HOVER_RADIUS;
      // Pressing
      else if (isPress) targetRadius = DOWN_RADIUS;
      // 속도 기반 사이즈 조절
      else {
        const now = performance.now(); // 현재 속도
        if (prevMouse.current) {
          const dx = mouse.x - prevMouse.current.x;
          const dy = mouse.y - prevMouse.current.y;
          const dt = Math.max(now - prevMouse.current.t, 1);
          const speed = Math.sqrt(dx * dx + dy * dy) / dt; // 속도(speed) = 거리(px) / 시간(ms)
          targetRadius = Math.max(MIN_RADIUS, BASE_RADIUS - speed * 60);
        }
        prevMouse.current = { ...mouse, t: now };
      }

      setRadius(r => {
        // 반지름 보간 - 목표 값으로 자연스럽게 가까워짐
        const next = r + (targetRadius - r) * RESTORE_SPEED;

        // 목표 반지름 값에 도달 시 애니메이션 중단
        if (Math.abs(targetRadius - next) < 0.1) {
          stopped = true;
          return targetRadius;
        }

        animationId = requestAnimationFrame(animate);
        return next;
      });
    }

    stopped = false;
    animate();

    return () => {
      stopped = true;
      cancelAnimationFrame(animationId);
    };
  }, [mouse, isHover, isPress]);

  // 부드러운 곡선 path 생성
  const pathD = getSmoothPath(points);

  return (
    <div className={cx('cursor-field')}>
      <svg width={windowSize.width} height={windowSize.height}>
        {/* 마우스 따라다니는 라인 */}
        {points.length > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke={TRAIL_COLOR}
            strokeWidth={TRAIL_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {/* 마우스 중심 원 */}
        <circle
          cx={mouse.x}
          cy={mouse.y}
          r={radius}
          fill={CIRCLE_COLOR}
          stroke={CIRCLE_COLOR}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default MouseTrailSVG;
