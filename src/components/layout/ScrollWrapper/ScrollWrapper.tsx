'use client';

import React, { useEffect, useRef } from 'react';
import { PropsWithChildren } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const ScrollWrapper = ({ children }: PropsWithChildren) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  /**
   * ScrollSmoother
   */
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      speed: 1,
      normalizeScroll: false,

      // light source
      onUpdate: (self: any) => {
        const max = 400;
        const vel = Math.floor(self.getVelocity() / 2);

        gsap.to('.light-source', {
          ease: 'power3',
          height: vel < 0 ? 0 : vel > max ? max : vel,
        });
      },
    });
  });

  return (
    <div>
      <div ref={wrapper} id="smooth-wrapper">
        <div ref={content} id="smooth-content">
          {children}
        </div>
      </div>

      {/* -- position: fixed elements can go outside -- */}
      <div className="light-source"></div>
    </div>
  );
};

export default ScrollWrapper;
