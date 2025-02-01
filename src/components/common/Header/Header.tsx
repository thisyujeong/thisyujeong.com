'use client';

import Link from 'next/link';
import metadata from 'data/metadata';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import FadeContainer from '../FadeContainer/FadeContainer';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('header-inner')}>
        <div className={cx('header-bl')}>
          <FadeContainer offsetY={10}>
            <h1 className={cx('logo')} ref={(el) => {}}>
              <Link href="/">
                <span className={cx('str')}>T</span>
                <span className={cx('str')}>Y</span>
              </Link>
            </h1>
          </FadeContainer>
          <FadeContainer delay={0.1} offsetY={10}>
            <div className={cx('desc')}>
              Web Frontend Developer
              <br />
              {`©${metadata.user.nickname} ${new Date().getFullYear()}`}
            </div>
          </FadeContainer>
        </div>

        <div className={cx('menu-bar')}>
          <ul className={cx('menu-bar_list')}>
            <li className={cx('menu-bar_item')}>
              <FadeContainer delay={0.2} offsetY={10}>
                <Link href="#career">Career</Link>
              </FadeContainer>
            </li>
            <li className={cx('menu-bar_item')}>
              <FadeContainer delay={0.3} offsetY={10}>
                <Link href="#experience">Experience</Link>
              </FadeContainer>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
