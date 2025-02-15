import { getSortedPostsData } from '@/service/experiences';
import {
  BackgroundCanvas,
  EmailForm,
  FadeContainer,
  RollingBanner,
  Title,
} from '@/components/common';
import { ExperienceWrapper } from '@/components/experience';
import { MyProfile } from '@/components/about';
import { CareerList } from '@/components/career';
import { StackList } from '@/components/stack';
import styles from './page.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(styles);

export default async function Home() {
  const postList = await getSortedPostsData();

  return (
    <div className={cx('page')}>
      <div className={cx('canvas')}>
        <BackgroundCanvas />
      </div>
      <div className={cx('content')}>
        <div className={cx('splash')}>
          <div className={cx('splash-img')}>
            <Image
              src="/assets/images/kv-splash.webp"
              fill
              sizes="100vw"
              priority
              alt=""
            />
          </div>
        </div>
        <div className={cx('container')}>
          <section className={cx('section', 'profile')}>
            <MyProfile />
          </section>
          <section className={cx('section', 'career')}>
            <Title>Career</Title>
            <CareerList />
          </section>

          <section className={cx('section')}>
            <ExperienceWrapper postList={postList} />
          </section>

          <RollingBanner />
          <section id="stacks" className={cx('section')}>
            <Title>Stacks</Title>
            <StackList />
          </section>
          <section className={cx('section', 'history')}>
            <div className={cx('education')}>
              <Title>Education</Title>

              <FadeContainer>
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
              </FadeContainer>
            </div>
            <div className={cx('certification')}>
              <Title>Certification</Title>
              <FadeContainer delay={0.1}>
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
              </FadeContainer>
            </div>
          </section>
          <section className={cx('section')}>
            <EmailForm />
          </section>
        </div>

        {/* <section id="experience" className={cx('section')}>
            <Title>Work Experience</Title>
            <ExperienceList data={postList} />
          </section> */}
      </div>
    </div>
  );
}
