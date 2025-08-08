'use client';

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import styles from './ProjectGrid.module.scss';
import classnames from 'classnames/bind';
import { usePageData } from '@/contexts/PageDataContext';
import Link from 'next/link';
import gsap from 'gsap';
import { staggerFadeIn } from '@/lib/gsap/animation';
import Image from 'next/image';
import { NotionPage } from '@/lib/notion/schema';

const cx = classnames.bind(styles);

const blindDirections = ['left', 'right', 'up', 'down'];

const ProjectGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { data, classifications } = usePageData();

  // 이미지 로드 완료 확인
  useEffect(() => {
    if (!data) return;
    const images = listRef.current?.querySelectorAll('img');
    if (!images || images.length === 0) {
      setImagesLoaded(true);
      return;
    }
    let loadedCount = 0;
    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === images.length) setImagesLoaded(true);
        });
        img.addEventListener('error', () => {
          loadedCount++;
          if (loadedCount === images.length) setImagesLoaded(true);
        });
      }
    });
    if (loadedCount === images.length) setImagesLoaded(true);
  }, [data]);

  useLayoutEffect(() => {
    if (!containerRef.current || !listRef.current || !data || !imagesLoaded) return;
    const blinds = listRef.current.querySelectorAll('[data-blind]');
    const images = listRef.current.querySelectorAll('img');

    const titleLines = listRef.current.querySelectorAll('span, h3');
    staggerFadeIn(Array.from(titleLines), 0.1);

    // blind animation
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        onEnter: () => {
          blinds.forEach((blind, index) => {
            images[index].style.opacity = '0';
            const direction = blind.getAttribute('data-blind');
            const tl = gsap.timeline();

            if (direction === 'up') {
              tl.from(blind, { top: 'unset', bottom: 0, width: '100%', height: '0' })
                .to(blind, { top: 0, bottom: 'unset', height: '100%', duration: 0 })
                .to(images[index], { opacity: 1, duration: 0 })
                .to(blind, { height: '0' });
            } else if (direction === 'down') {
              tl.from(blind, { top: 0, bottom: 'unset', width: '100%', height: '0' })
                .to(blind, { top: 'unset', bottom: 0, height: '100%', duration: 0 })
                .to(images[index], { opacity: 1, duration: 0 })
                .to(blind, { height: '0' });
            } else if (direction === 'left') {
              tl.from(blind, { right: 0, left: 'unset', width: 0, height: '100%' })
                .to(blind, { right: 'unset', left: 0, width: '100%', duration: 0 })
                .to(images[index], { opacity: 1, duration: 0 })
                .to(blind, { width: '0' });
            } else if (direction === 'right') {
              tl.from(blind, { right: 'unset', left: 0, width: 0, height: '100%' })
                .to(blind, { right: 0, left: 'unset', width: '100%', duration: 0 })
                .to(images[index], { opacity: 1, duration: 0 })
                .to(blind, { width: '0' });
            }
          });
        },
      },
    });
  }, [imagesLoaded, data]);

  if (!data) return <p>프로젝트 없음</p>;

  return (
    <div className={cx('project-container')} ref={containerRef}>
      <div className={cx('project-list')} ref={listRef}>
        {data.map((project: NotionPage, idx: number) => {
          const name = project.properties.Name.title[0].plain_text;
          const slug = project.properties.Slug.rich_text[0].plain_text;
          const nameEng = project.properties.NameEng?.rich_text[0]?.plain_text;
          const classification = project.properties.Class.select?.name;
          const thumbnail = project.properties.Thumbnail.files[0]?.file.url;
          const color = project.properties.Color.rich_text[0]?.plain_text;
          const direction = blindDirections[idx % blindDirections.length];

          return (
            <Link href={`/project/${slug}`} key={project.id} className={cx('project-item')}>
              <div className={cx('project-inner')}>
                <div className={cx('project-content')}>
                  <span className={cx('classification')}>{classification}</span>
                  <h3 className={cx('title')}>{nameEng ?? name}</h3>
                </div>
                <div className={cx('project-image')}>
                  <div
                    className={cx('blind')}
                    style={{ backgroundColor: color }}
                    data-blind={direction}
                  />
                  <Image src={thumbnail} width={0} height={0} sizes="400px" alt={name} priority />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;
