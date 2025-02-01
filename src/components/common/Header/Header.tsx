'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Link from 'next/link';
import metadata from 'data/metadata';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-emblem')}>*</div>
      <div className={cx('header-inner')}>
        <div className={cx('header-bl')}>
          <h1 className={cx('logo')}>
            <Link href="/">
              <span>T</span>
              <span>Y</span>
            </Link>
          </h1>
          <div className={cx('desc')}>
            Web Frontend Developer
            <br />
            {`©${metadata.user.nickname} ${new Date().getFullYear()}`}
          </div>
        </div>

        <div className={cx('menu-bar')}>
          <ul className={cx('menu-bar_list')}>
            <li className={cx('menu-bar_item')}>
              <Link href="#career">Career</Link>
            </li>
            <li className={cx('menu-bar_item')}>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
