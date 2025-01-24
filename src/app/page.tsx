import KeyCanvas from '@/components/KeyCanvas/KeyCanvas';
import styles from './page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('page')}>
      <KeyCanvas />
    </div>
  );
}
