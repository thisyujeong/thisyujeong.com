import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { queryClient } from '@/main';
import { getPageBySlug, getPages } from '@/lib/notion';
import { useQuery } from '@tanstack/react-query';
import classnames from 'classnames/bind';
import styles from './ProjectList.module.scss';

const cx = classnames.bind(styles);

const ProjectList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['notion-pages'],
    queryFn: getPages,
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
  }, [data]);

  if (isLoading) return <p>로딩 중...</p>;
  if (!data) return <p>프로젝트 없음</p>;

  return (
    <ul>
      {data.map(project => {
        const name = project.properties.Name.title[0].plain_text;
        const slug = project.properties.Slug.rich_text[0].plain_text;

        return (
          <li className={cx('project-list')} key={project.id}>
            <Link to={`/project/${slug}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
