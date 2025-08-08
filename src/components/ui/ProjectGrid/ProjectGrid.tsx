'use client';

import React, { useRef } from 'react';
import styles from './ProjectGrid.module.scss';
import classnames from 'classnames/bind';
import { usePageData } from '@/contexts/PageDataContext';
import Link from 'next/link';
import gsap from 'gsap';
import Image from 'next/image';
import { NotionPage } from '@/lib/notion/schema';
import { useGSAP } from '@gsap/react';

const cx = classnames.bind(styles);

const directions = ['left', 'right', 'up', 'down'];

const ProjectGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const { data, currentTab } = usePageData();

  useGSAP(() => {
    if (!cardRefs.current || !data) return;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const direction = directions[Math.floor(Math.random() * directions.length)];
      const blind = card.querySelector('[data-blind]');
      const image = card.querySelector('img');
      const texts = Array.from(card.querySelectorAll('span, h3'));

      // 초기화
      gsap.killTweensOf([card, blind, image, ...texts]);

      // texts
      gsap.set(texts, { opacity: 0, y: 10 });
      gsap.to(texts, { delay: index * 0.1, opacity: 1, stagger: 0.1, y: 0 });

      // blind timeline
      const tl = gsap.timeline();
      tl.set(image, { opacity: 0 });

      if (direction === 'up') {
        tl.set(blind, { top: 'unset', bottom: 0, width: '100%', height: '0' });
        tl.to(blind, { height: '100%' }) //
          .to(image, { opacity: 1, duration: 0 })
          .to(blind, { top: 0, bottom: 'unset', height: '0' });
      }

      if (direction === 'down') {
        tl.set(blind, { top: 0, bottom: 'unset', width: '100%', height: '0' });
        tl.to(blind, { height: '100%' }) //
          .to(image, { opacity: 1, duration: 0 })
          .to(blind, { top: 'unset', bottom: 0, height: '0' });
      }

      if (direction === 'left') {
        tl.set(blind, { right: 0, left: 'unset', width: '0', height: '100%' });
        tl.to(blind, { width: '100%' }) //
          .to(image, { opacity: 1, duration: 0 })
          .to(blind, { right: 'unset', left: 0, width: '0' });
      }

      if (direction === 'right') {
        tl.set(blind, { right: 'unset', left: 0, width: '0', height: '100%' });
        tl.to(blind, { width: '100%' }) //
          .to(image, { opacity: 1, duration: 0 })
          .to(blind, { right: 0, left: 'unset', width: '0' });
      }
    });
  }, [data, currentTab]);

  if (!data) return <p>프로젝트 없음</p>;

  return (
    <div className={cx('project-container')} ref={containerRef}>
      <div className={cx('project-list')}>
        {data.map((project: NotionPage, idx: number) => {
          const name = project.properties.Name.title[0].plain_text;
          const slug = project.properties.Slug.rich_text[0].plain_text;
          const nameEng = project.properties.NameEng?.rich_text[0]?.plain_text;
          const classification = project.properties.Class.select?.name;
          const color = project.properties.Color.rich_text[0]?.plain_text;

          return (
            <Link
              href={`/project/${slug}`}
              key={project.id}
              className={cx('project-item')}
              ref={el => {
                cardRefs.current[idx] = el;
              }}
            >
              <div className={cx('project-inner')}>
                <div className={cx('project-content')}>
                  <span className={cx('classification')}>{classification}</span>
                  <h3 className={cx('title')}>{nameEng ?? name}</h3>
                </div>
                <div className={cx('project-image')}>
                  <div
                    className={cx('blind')}
                    style={{ backgroundColor: color }}
                    data-blind={true}
                  />
                  <Image
                    src={`/images/project/thumbnail-${slug}.webp`}
                    width={0}
                    height={0}
                    sizes="400px"
                    alt={name}
                    priority
                  />
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
