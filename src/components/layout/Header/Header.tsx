'use client';

import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { metadata } from '@/constants/metadata';
import Link from 'next/link';

const cx = classnames.bind(styles);

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // 아래로 스크롤하면 숨김
      } else {
        setIsVisible(true); // 위로 스크롤하면 보임
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cx('header', { 'is-hidden': !isVisible })}>
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
