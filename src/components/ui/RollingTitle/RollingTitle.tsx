'use client';

import gsap from 'gsap';
import classnames from 'classnames/bind';
import { useLayoutEffect, useRef } from 'react';
import styles from './RollingTitle.module.scss';

const cx = classnames.bind(styles);

const RollingTitle = () => {
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
    <h2 className={cx('title')}>
      <div className={cx('title-rolling')} ref={titleRef}>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
        <span className={cx('title-line')}>The Archive (2021 - {new Date().getFullYear()}) · </span>
      </div>
    </h2>
  );
};

export default RollingTitle;
