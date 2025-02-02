import classNames from 'classnames/bind';
import styles from './CareerList.module.scss';
import { FadeContainer } from '@/components/common';

const cx = classNames.bind(styles);

const CareerList = () => {
  return (
    <div className={cx('career')}>
      <FadeContainer>
        <div className={cx('card')}>
          <div className={cx('card__period')}>
            <span>
              2021.01.11 - <strong>현재</strong>
            </span>
          </div>
          <div className={cx('card__inner')}>
            <div className={cx('card__head')}>
              <div className={cx('company')}>
                <strong>에이치나인</strong>
                <span>퍼블리싱 및 UI 개발</span>
              </div>
            </div>
            <div className={cx('card__content')}>
              <div className={cx('summary')}>
                <p>
                  다양한 디지털 플랫폼의 UI/UX 개발, 성능 최적화 및 인터랙티브 웹 구현을
                  담당하였습니다. 주요 프로젝트에서{' '}
                  <strong>UI/UX 최적화, 컴포넌트 개발, 인터랙션 설계 및 유지보수</strong>
                  를 담당하며, <strong>사용자 경험 향상과 개발 생산성 증대에 기여</strong>
                  하였습니다.
                </p>
              </div>
              <div className={cx('detail')}>
                <ul>
                  <li>
                    React, Next.js, VanillaJS 환경에서 컴포넌트 UI부터 페이지 단위까지의
                    퍼블리싱 작업 수행
                  </li>
                  <li>
                    Web Component 기반의 모듈화된 UI 컴포넌트 설계를 통해 코드 재사용성을
                    높이고 유지보수성을 강화
                  </li>
                  <li>
                    GSAP, Three.js, SVG 애니메이션을 활용한 인터랙티브 웹 구현, 트렌디한
                    인터랙션 기획 및 최적화 적용
                  </li>
                  <li>
                    Media Query를 활용한 반응형 UI 개발 및 특정 디바이스 환경(Webview, TV,
                    크로스 브라우징 등)에 최적화된 UI/UX 대응
                  </li>
                  <li>성능 개선을 위한 애니메이션 및 렌더링 최적화</li>
                  <li>스타일 가이드에 맞춘 디자인 토큰 및 테마 커스터마이징</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeContainer>
    </div>
  );
};

export default CareerList;
