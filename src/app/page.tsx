import { BackgroundCanvas } from '@/components/common';
import { ExperienceList } from '@/components/experience';
import { MyProfile } from '@/components/about';
import styles from './page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('page')}>
      <div className={cx('canvas')}>
        <BackgroundCanvas />
      </div>
      <div className={cx('content')}>
        <div className={cx('container')}>
          <section className={cx('key-visual')}>
            <p>
              웹 프론트엔드 UX 엔지니어 <strong>이유정</strong>
            </p>
            <h2>
              Web Frontend
              <br />
              UX Engineer
            </h2>
          </section>
          <section className={cx('section')}>
            <MyProfile />
          </section>
          <section className={cx('section')}>
            <h3>Career</h3>
            <div className={cx('career-list')}>
              <div className={cx('career-item')}>
                <div className={cx('career-head')}>
                  <strong>에이치나인(HNINE)</strong>
                  <span className={cx('date')}>2021.01.11 - 현재</span>
                  <span className={cx('tag')}>퍼블리싱 및 UI 개발</span>
                </div>
                <div className={cx('career-content')}>
                  <ul>
                    <li>
                      React, Next.js, VanillaJS 환경에서 컴포넌트 UI부터 페이지 단위까지의
                      퍼블리싱 작업
                    </li>
                    <li>
                      Web Component 기반의 코드 재사용성을 높인 모듈화된 UI 컴포넌트 설계
                    </li>
                    <li>GSAP / Three.js 등의 라이브러리를 통한 인터랙티브 웹 구현</li>
                    <li>Media Query를 활용한 반응형 작업</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={cx('section')}>
            <h3>Experience</h3>
            <ExperienceList />
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
