'use client';

import { PropsWithChildren, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

const Title = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ref.current) {
      gsap.set(ref.current, { y: 50, opacity: 0, rotate: 5 });
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'sine',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      });
    }
  });
  return (
    <h3 className={cx('title')}>
      <span ref={ref}>{children}</span>
    </h3>
  );
};

export default Title;
