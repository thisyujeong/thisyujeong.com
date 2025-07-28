'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { getClassPages, getPageBySlug } from '@/lib/notion';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import classnames from 'classnames/bind';
import styles from './ProjectList.module.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import { staggerFadeIn } from '@/lib/gsap/animation';

const cx = classnames.bind(styles);

const ProjectList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['notion-pages'],
    queryFn: () => getClassPages('HNINE'),
  });

  // prefetch
  useEffect(() => {
    if (data) {
      data.forEach(project => {
        const slug = project.properties.Slug.rich_text[0]?.plain_text;
        if (slug) {
          queryClient.prefetchQuery({
            queryKey: ['page', slug],
            queryFn: () => getPageBySlug(slug),
          });
        }
      });
    }
  }, [data, queryClient]);

  useLayoutEffect(() => {
    if (listRef.current && !isLoading) {
      const titleLines = listRef.current.querySelectorAll('a');
      staggerFadeIn(Array.from(titleLines), 0.1);
    }
  }, [isLoading]);

  if (isLoading) return <p>로딩 중...</p>;
  if (!data) return <p>프로젝트 없음</p>;

  console.log('data', data);
  return (
    <div className={cx('projects-container')}>
      <div className={cx('projects')} ref={listRef}>
        {data.map(project => {
          const name = project.properties.Name.title[0].plain_text;
          const slug = project.properties.Slug.rich_text[0].plain_text;
          const nameEng = project.properties.NameEng?.rich_text[0]?.plain_text;
          const startDate = project.properties.StartDate.date.start;
          const endDate = project.properties.EndDate.date.start;
          const classification = project.properties.Class.select?.name;

          return (
            <Link
              href={`/project/${slug}`}
              className={cx('projects-link', 'hover-target')}
              key={project.id}
            >
              <ProjectItem
                title={nameEng ?? name}
                startDate={startDate}
                endDate={endDate}
                classification={classification}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
