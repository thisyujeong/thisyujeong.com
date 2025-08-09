import { getClassNames, getPages } from '@/lib/notion';
import classnames from 'classnames/bind';
import styles from './page.module.scss';
import RollingTitle from '@/components/ui/RollingTitle/RollingTitle';
import PageDataProviderWrapper from './PageDataProviderWrapper';
import ProjectWrapper from '@/components/ui/ProjectWrapper/ProjectWrapper';

const cx = classnames.bind(styles);

export default async function Home() {
  const classifications = await getClassNames();
  const data = await getPages();

  if (!data) return null;

  return (
    <PageDataProviderWrapper value={{ data, classifications: classifications }}>
      <div className={cx('container')}>
        <section className={cx('hero')}>
          <RollingTitle />
        </section>
        <section className={cx('content')}>
          <ProjectWrapper />
        </section>
      </div>
    </PageDataProviderWrapper>
  );
}
