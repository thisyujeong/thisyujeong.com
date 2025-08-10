import { getPageBySlug } from '@/lib/notion';
import Image from 'next/image';
import styles from './page.module.scss';
import classnames from 'classnames/bind';
import ProjectContent from '@/components/ui/ProjectContent/ProjectContent';
import { fetchArticleContent } from '@/lib/notion/client';

const cx = classnames.bind(styles);

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function Project({ params: slug }: ProjectPageProps) {
  const page = await getPageBySlug(slug.id);
  const { parent: content } = await fetchArticleContent(page.id);

  console.log('🔥 content', content);

  return (
    <div className={cx('project-page')}>
      <div className={cx('project-cover')}>
        {/* <Image
          src={page.cover.file.url}
          alt={page.properties.Name.title[0].plain_text}
          width={0}
          height={0}
          sizes="100vw"
        /> */}
      </div>

      <section>
        <ProjectContent content={content} />
      </section>

      {/* <div>{JSON.stringify(page)}</div> */}
    </div>
  );
}
