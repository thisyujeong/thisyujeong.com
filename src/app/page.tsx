import { BackgroundCanvas, RollingBanner } from '@/components/common';
import { ExperienceList } from '@/components/experience';
import { MyProfile } from '@/components/about';
import styles from './page.module.scss';
import classNames from 'classnames/bind';
import { getSortedPostsData } from '@/service/experiences';

const cx = classNames.bind(styles);

export default function Home() {
  const postList = getSortedPostsData();

  return (
    <div className={cx('page')}>
      <div className={cx('canvas')}>
        <BackgroundCanvas />
      </div>
      <div className={cx('content')}>
        <div className={cx('container')}>
          <section className={cx('key-visual')}>
            <MyProfile />
          </section>
          <RollingBanner />
          <section id="career" className={cx('section')}>
            <h3>Career</h3>
            <div className={cx('career-list')}>
              <div className={cx('career-item')}>
                <div className={cx('career-head')}>
                  <strong>에이치나인.HNINE</strong>
                  <div className={cx('desc')}>
                    <span className={cx('tag')}>퍼블리싱 및 UI 개발</span>
                    <span className={cx('date')}>2021.01.11 - 현재</span>
                  </div>
                </div>
                <div className={cx('career-content')}>
                  <ul>
                    <li>
                      React, Next.js, VanillaJS 환경에서 컴포넌트 UI부터 페이지 단위까지의
                      퍼블리싱 작업 수행
                    </li>
                    <li>
                      Web Component 기반의 모듈화된 UI 컴포넌트 설계를 통해 코드
                      재사용성을 높이고 유지보수성을 강화
                    </li>
                    <li>
                      GSAP, Three.js, SVG 애니메이션을 활용한 인터랙티브 웹 구현, 트렌디한
                      인터랙션 기획 및 최적화 적용
                    </li>
                    <li>
                      Media Query를 활용한 반응형 UI 개발 및 특정 디바이스 환경(Webview,
                      TV, 크로스 브라우징 등)에 최적화된 UI/UX 대응
                    </li>
                    <li>성능 개선을 위한 애니메이션 및 렌더링 최적화</li>
                    <li>스타일 가이드에 맞춘 디자인 토큰 및 테마 커스터마이징</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="experience" className={cx('section')}>
            <h3>Work Experience</h3>
            <ExperienceList data={postList} />
          </section>

          <section className={cx('section', 'history')}>
            <div className={cx('education')}>
              <h3>Education</h3>
              <div className={cx('history-list')}>
                <div className={cx('history-item')}>
                  <div className={cx('history-head')}>
                    <span className={cx('date')}>2022.09 - 2024.08</span>
                  </div>
                  <div className={cx('history-content')}>
                    <div className={cx('title')}>한국방송통신대학교</div>
                    <p className={cx('desc')}>컴퓨터과학과 학사 편입/졸업</p>
                  </div>
                </div>
                <div className={cx('history-item')}>
                  <div className={cx('history-head')}>
                    <span className={cx('date')}>2019.03 - 2021.02</span>
                  </div>
                  <div className={cx('history-content')}>
                    <div className={cx('title')}>계원예술대학교</div>
                    <p className={cx('desc')}>
                      디지털미디어디자인과 전문학사 졸업 <br />
                      세부전공 프로그래밍
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('certification')}>
              <h3>Certification</h3>
              <div className={cx('history-list')}>
                <div className={cx('history-item')}>
                  <div className={cx('history-head')}>
                    <span className={cx('date')}>2022.11</span>
                  </div>
                  <div className={cx('history-content')}>
                    <div className={cx('title')}>정보처리기사</div>
                  </div>
                </div>
                <div className={cx('history-item')}>
                  <div className={cx('history-head')}>
                    <span className={cx('date')}>2020.11</span>
                  </div>
                  <div className={cx('history-content')}>
                    <div className={cx('title')}>정보처리산업기사</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
