import { type PropsWithChildren } from 'react';
import Link from 'next/link';
import { metadata } from '@/constants/metadata';
import classnames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import MouseTrailSVG from '../MouseTrailSVG/MouseTrailSVG';

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx('wrapper')}>
      <MouseTrailSVG />
      <header className={cx('header')}>
        <h1 className={cx('logo')}>
          <Link href="/">{metadata.url}</Link>
        </h1>

        <nav className={cx('navigation')}>
          <ul>
            <li>
              <Link href="#;">about</Link>
            </li>
            <li>
              <Link href="#;">archive</Link>
            </li>
            <li>
              <Link href="#;">github</Link>
            </li>
          </ul>
        </nav>
      </header>

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
