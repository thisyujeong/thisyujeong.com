import { getSortedPostsData } from '@/service/experiences';
import { BackgroundCanvas, RollingBanner } from '@/components/common';
import { ExperienceList } from '@/components/experience';
import { MyProfile } from '@/components/about';
import { CareerList } from '@/components/career';
import metadata from 'data/metadata';
import Link from 'next/link';
import styles from './page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default async function Home() {
  const postList = await getSortedPostsData();

  return (
    <div className={cx('page')}>
      <div className={cx('canvas')}>
        <BackgroundCanvas />
      </div>
      <div className={cx('content')}>
        <div className={cx('container')}>
          <section className={cx('key-visual')}>
            <MyProfile />
            <div className={cx('actions')}>
              <Link
                href={metadata.links.notion}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Notion</span>
              </Link>
              <a
                href={metadata.links.blog}
                className={cx('primary')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github</span>
              </a>
            </div>
          </section>
          <section className={cx('section')}>
            <h3>Career</h3>
            <div className={cx('career')}>
              <CareerList />
            </div>
          </section>
          <section id="experience" className={cx('section')}>
            <h3>Work Experience</h3>
            <ExperienceList data={postList} />
          </section>

          <RollingBanner />

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
