import { BackgroundCanvas } from '@/components/common';
import styles from './page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('page')}>
      <div className={cx('bg-layer')}>
        <BackgroundCanvas />
      </div>
      <div className={cx('content')}>
        <div className={cx('container')}>
          <div className={cx('key-visual')}>
            <h3>
              웹 프론트엔드 UX 엔지니어 <strong>이유정</strong>
            </h3>
            <h2>
              Web Frontend
              <br />
              UX Engineer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
