'use client';

import React, { useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './ProjectWrapper.module.scss';
import { usePageData } from '@/contexts/PageDataContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectTabs from '../ProjectTabs/ProjectTabs';
import ProjectGrid from '../ProjectGrid/ProjectGrid';

const cx = classnames.bind(styles);

const ProjectWrapper = () => {
  const { currentTab } = usePageData();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !tabsRef.current) return;
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.to(tabsRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 10%',
        end: 'bottom center',
        pin: tabsRef.current,
        pinSpacing: false,
      },
    });

    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currentTab]);
  return (
    <div className={cx('project-wrapper')} ref={wrapperRef}>
      <div className={cx('project-tabs')} ref={tabsRef}>
        <ProjectTabs />
      </div>
      <div className={cx('project-content')}>
        <ProjectGrid />
      </div>
    </div>
  );
};

export default ProjectWrapper;
