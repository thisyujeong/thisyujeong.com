import { type PropsWithChildren } from 'react';
import { metadata } from '@/constants/metadata';
import classnames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx('wrapper')}>
      <main className={cx('main')}>{children}</main>

      <footer className={cx('footer')}>
        <p>
          Copyright © 2025 <a href="#;">{metadata.nickname}</a>
        </p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
