import { getClassNames, getPages } from '@/lib/notion';
import RollingTitle from '@/components/ui/RollingTitle/RollingTitle';
import classnames from 'classnames/bind';
import styles from './page.module.scss';
import PageDataProviderWrapper from './PageDataProviderWrapper';
import ProjectGrid from '@/components/ui/ProjectGrid/ProjectGrid';

const cx = classnames.bind(styles);

export default async function Home() {
  const data = await getPages();

  return (
    <PageDataProviderWrapper value={data}>
      <div className={cx('container')}>
        <section className={cx('hero')}>
          <RollingTitle />
        </section>
        <section>
          <ProjectGrid />
        </section>
      </div>
    </PageDataProviderWrapper>
  );
}
