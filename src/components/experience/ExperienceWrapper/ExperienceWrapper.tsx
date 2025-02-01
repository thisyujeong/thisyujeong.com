'use client';

import { useModal } from '@/components/common/Modal/ModalProvider';
import { ExperienceType } from '@/service/experiences';
import { LoadingSpinner, Title } from '@/components/common';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './ExperienceWrapper.module.scss';

const cx = classNames.bind(styles);

interface ExperienceWrapperProps {
  postList: ExperienceType[];
}
const ExperienceWrapper = ({ postList }: ExperienceWrapperProps) => {
  const wrapperRef = useRef(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const layoutRef = useRef<HTMLDivElement>(null);

  const { showModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  useGSAP(() => {
    if (cardsRef.current.length < 0) return;
    if (!listRef.current) return;
    if (!layoutRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const width = listRef.current.clientWidth - layoutRef.current.clientWidth;
    gsap.to(listRef.current, {
      x: width * -1 + 'px',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'center center',
        end: '+=' + width + 'px',
        pin: true,
        scrub: true,
      },
    });

    gsap.to(cardsRef.current, { scale: 0.8 });
    gsap.to(cardsRef.current, {
      scale: 1,
      ease: 'ease.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 80%',
        markers: true,
      },
    });
  });

  const handleClick = async (id: string) => {
    setIsLoading(true);
    const { contentHtml, frontmatter } = await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    setIsLoading(false);
    showModal({
      title: frontmatter.title,
      startDate: frontmatter.startDate,
      endDate: frontmatter.endDate,
      tags: frontmatter.tags,
      type: frontmatter.type,
      thumbnailUrl: frontmatter.thumbnailUrl,
      contentHtml,
    });
  };

  return (
    <>
      <div className={cx('wrapper')} ref={wrapperRef}>
        <div className={cx('container')}>
          <div id="experience" className={cx('title')}>
            <Title>Experience</Title>
          </div>
          <div className={cx('card-layout')} ref={layoutRef}>
            <div className={cx('card-list')} ref={listRef}>
              {postList.map((post, i) => (
                <div
                  key={post.id}
                  className={cx('card')}
                  ref={(el) => {
                    el && cardsRef.current.push(el);
                  }}
                  onClick={() => handleClick(post.id)}
                >
                  <div className={cx('number')}>
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <div className={cx('card-thumbnail')}>
                    {post.thumbnailUrl && (
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        sizes="800px"
                        fill
                      />
                    )}
                  </div>
                  <div className={cx('card-content')}>
                    <strong>{post.title}</strong>
                    <p>{post.description}</p>
                    <div
                      className={cx('date')}
                    >{`${post.startDate} - ${post.endDate}`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default ExperienceWrapper;
