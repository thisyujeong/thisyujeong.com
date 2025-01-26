import { BackgroundCanvas } from '@/components/common';
import styles from './page.module.scss';
import classNames from 'classnames/bind';
import { ExperienceList } from '@/components/experience';

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
            <h3>Career</h3>
          </section>
          <section className={cx('section')}>
            <h3>Experience</h3>
            <ExperienceList />
          </section>
          <section className={cx('section')}>
            <h3>Education</h3>
          </section>
        </div>
      </div>
    </div>
  );
}
