'use client';

import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './RollingBanner.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const cx = classNames.bind(styles);

const RollingBanner = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(ref.current, { x: 0 });
      gsap.to(ref.current, {
        x: -ref.current.clientWidth,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  });
  return (
    <div className={cx('rolling')} ref={ref}>
      <div className={cx('rolling-inner')}>
        <div className={cx('rolling-text')}>Web Frontend Developer</div>
        <div className={cx('rolling-text')}>Web Frontend Developer</div>
        <div className={cx('rolling-text')}>Web Frontend Developer</div>
      </div>
    </div>
  );
};

export default RollingBanner;
