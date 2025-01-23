import styles from './page.module.scss';
import classNames from 'classnames/bind';

import { Button, Header } from '@/components';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className={cx('page')}>
      <Header />
    </div>
  );
}
