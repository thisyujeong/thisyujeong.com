'use client';

import React, { PropsWithChildren, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './FadeContainer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface FadeContainerProps {
  delay?: number;
  slideIn?: boolean;
  offsetY?: number;
}
const FadeContainer = ({
  children,
  delay = 0,
  slideIn = true,
  offsetY = 30,
}: PropsWithChildren<FadeContainerProps>) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ref.current) {
      gsap.set(ref.current, { y: slideIn ? offsetY : 0, opacity: 0 });
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        delay: delay,
        ease: 'sine',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      });
    }
  });

  return (
    <div className={cx('fade-container')} ref={ref}>
      {children}
    </div>
  );
};

export default FadeContainer;
