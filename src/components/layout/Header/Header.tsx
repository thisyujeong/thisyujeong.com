import React from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { metadata } from '@/constants/metadata';
import Link from 'next/link';

const cx = classnames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <h1 className={cx('logo')}>
        <Link href="/">{metadata.url}</Link>
      </h1>

      <nav className={cx('navigation')}>
        <ul>
          <li>
            <Link href="#">works</Link>
          </li>
          <li>
            <Link href="#">archive</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
        </ul>
      </nav>

      <div className={cx('etc')}>
        <button>
          <span>Let&apos;s Together</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
