'use client';

import classnames from 'classnames/bind';
import { useLayoutEffect, useRef } from 'react';
import styles from './HomePage.module.scss';
import gsap from 'gsap';
import ProjectGrid from '@/components/ui/ProjectGrid/ProjectGrid';

const cx = classnames.bind(styles);

const HomePage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: -titleRef.current.clientWidth / 2,
        duration: 30,
        ease: 'linear',
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className={cx('container')}>
      <section className={cx('hero')}>
        <h2 className={cx('title')}>
          <div className={cx('title-rolling')} ref={titleRef}>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
            <span className={cx('title-line')}>
              The Archive (2021 - {new Date().getFullYear()}) ·{' '}
            </span>
          </div>
        </h2>
      </section>
      <section>
        <ProjectGrid />
      </section>
    </div>
  );
};

export default HomePage;
