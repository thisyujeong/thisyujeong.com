'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const sites = [
  { id: 'github', label: 'github', path: 'https://github.com/thisyujeong' },
  { id: 'blog', label: 'blog', path: 'https://thisyujeong.dev' },
];

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
            ©thisyujeong 2025
          </div>
        </div>

        <div className={cx('menu-bar')}>
          <ul className={cx('menu-bar_list')}>
            <li className={cx('menu-bar_item')}>
              <Link href="#;">Who I Am</Link>
            </li>
            <li className={cx('menu-bar_item')}>
              <Link href="#;">Experience</Link>
            </li>
          </ul>

          <div className={cx('dropdown')}>
            <button>
              <span>visit</span>
            </button>
            <div className={cx('dropdown_popover')}>
              <div className={cx('dropdown_popover-inner')}>
                <ul>
                  {sites.map(({ id, label, path }) => (
                    <li key={id}>
                      <Link href={path} target="_blank">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
