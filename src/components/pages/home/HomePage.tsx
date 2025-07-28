'use client';

import classnames from 'classnames/bind';
import { useLayoutEffect, useRef } from 'react';
import { staggerRotateIn } from '@/lib/gsap/animation';
import styles from './HomePage.module.scss';
import ProjectList from '@/components/ui/ProjectList/ProjectList';

const cx = classnames.bind(styles);

const HomePage = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (titleRef.current) {
      const titleLines = titleRef.current.querySelectorAll('div span');
      staggerRotateIn(Array.from(titleLines), 0.3);
    }
  }, []);

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')} ref={titleRef}>
        <div className={cx('title-line')}>
          <span>The Archive</span>
        </div>
        <div className={cx('title-line')}>
          <span>2021 - {new Date().getFullYear()}</span>
        </div>
      </h2>
      <div className={cx('projects')}>
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;
