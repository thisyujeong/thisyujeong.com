import classNames from 'classnames/bind';
import styles from './StackList.module.scss';
import { FadeContainer } from '@/components/common';

const cx = classNames.bind(styles);

const StackList = () => {
  return (
    <div className={cx('stack')}>
      <div className={cx('stack-list')}>
        <FadeContainer>
          <div className={cx('stack-card', 'next')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>NextJS</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>
                  Next.js 14 버전 이상의 App Router 방식을 사용하여 프로젝트를 개발할 수
                  있습니다.
                </li>
                <li>
                  SSR, SSG, ISR(Incremental Static Regeneration) 렌더링 방식을 이해하고
                  적용할 수 있습니다.
                </li>
                <li>
                  클라이언트 컴포넌트와 서버 컴포넌트를 구별하여 사용할 수 있습니다.
                </li>
                <li>API Routes를 활용하여 서버와의 데이터 통신을 구현할 수 있습니다.</li>
                <li>
                  Metadata 및 SEO 최적화를 위한 head 설정과 Open Graph 태그를 활용할 수
                  있습니다.
                </li>
                <li>이미지 최적화를 위해 next/image를 활용할 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer delay={0.1}>
          <div className={cx('stack-card', 'react')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>ReactJS</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>
                  React의 컴포넌트 기반 아키텍처를 이해하고 효율적으로 활용할 수 있습니다.
                </li>
                <li>
                  React Hooks(useState, useEffect, useMemo, useCallback 등)를 적극적으로
                  활용할 수 있습니다.
                </li>
                <li>
                  debounce, throttle 등의 커스텀 훅을 제작해 웹 성능을 최적화할 수
                  있습니다.
                </li>
                <li>Zustand를 활용하여 전역 상태 관리를 할 수 있습니다.</li>
                <li>
                  React-hook-form을 활용하여 효율적으로 폼 유효성을 관리할 수 있습니다.
                </li>
                <li>
                  React Portal을 활용하여 모달과 같은 컴포넌트 렌더링을 제어할 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer>
          <div className={cx('stack-card', 'js')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>Javascript / Typescript</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>ES6 문법을 사용할 수 있습니다.</li>
                <li>Vanilla Javascript 사용에 익숙합니다.</li>
                <li>async / await을 통한 비동기 처리가 가능합니다.</li>
                <li>localStorage를 활용하여 데이터를 관리할 수 있습니다.</li>
                <li>
                  타입스크립트의 기본적인 타입 시스템을 이해하고 활용할 수 있습니다.
                </li>
                <li>인터페이스 및 타입 선언을 통해 코드의 안정성을 높일 수 있습니다.</li>
                <li>
                  React 프로젝트에서 TypeScript를 적용하여 유지보수성과 가독성을 향상시킬
                  수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer delay={0.1}>
          <div className={cx('stack-card', 'html-css')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>HTML / CSS</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>웹 표준을 준수한 코드 구조를 설계합니다.</li>
                <li>시멘틱 마크업 작업이 가능합니다.</li>
                <li>Media Query 반응형 작업에 능숙합니다.</li>
                <li>Keyframes 애니메이션 작업에 능숙합니다.</li>
                <li>SVG 애니메이션을 활용할 수 있습니다.</li>
                <li>Flex, Grid 와 같은 속성을 적극적으로 활용합니다.</li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer>
          <div className={cx('stack-card', 'gsap')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>GSAP</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>GSAP를 활용한 UI 인터랙션 및 애니메이션 구현에 능숙합니다.</li>
                <li>
                  ScrollTrigger를 사용하여 스크롤 기반 애니메이션을 제작할 수 있습니다.
                </li>
                <li>
                  Timeline을 활용한 복합 애니메이션을 효과적으로 구성할 수 있습니다.
                </li>
                <li>
                  SVG 및 Canvas 요소를 GSAP와 결합하여 다양한 동적 효과를 구현할 수
                  있습니다.
                </li>
                <li>Three.js 와 결합하여 다이나믹한 애니메이션을 구현할 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer delay={0.1}>
          <div className={cx('stack-card', 'git')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>Git</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>
                  rebase, cherry-pick 등의 Git 명령어를 활용하여 커밋 이력을 정리할 수
                  있습니다.
                </li>
                <li>.gitignore 를 활용하여 프로젝트 관리의 효율성을 높일 수 있습니다.</li>
                <li>
                  commit 컨벤션을 준수하여 가독성 높은 커밋 메시지를 작성할 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </FadeContainer>
        <FadeContainer>
          <div className={cx('stack-card', 'git')}>
            <div className={cx('stack-card__head')}>
              <span className={cx('title')}>ETC</span>
            </div>
            <div className={cx('stack-card__content')}>
              <ul>
                <li>SCSS 전처리기의 mixin, extend, variables를 적극적으로 활용합니다.</li>
                <li>
                  Styled-components, vanilla-extract와 같은 스타일 라이브러리를 활용할 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
        </FadeContainer>
      </div>
    </div>
  );
};

export default StackList;
