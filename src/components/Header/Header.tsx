'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-inner')}>
        <div className={cx('header-bl')}>
          <h1 className={cx('logo')}>
            <Link href="/">T&nbsp;&nbsp;Y</Link>
          </h1>
          <div className={cx('desc')}>Frontend UX Developer</div>
        </div>
        <button>INDEX</button>
      </div>
    </header>
  );
};

export default Header;
