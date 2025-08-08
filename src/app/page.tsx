import { getClassNames, getPages } from '@/lib/notion';
import RollingTitle from '@/components/ui/RollingTitle/RollingTitle';
import classnames from 'classnames/bind';
import styles from './page.module.scss';
import PageDataProviderWrapper from './PageDataProviderWrapper';
import ProjectGrid from '@/components/ui/ProjectGrid/ProjectGrid';
import Tabs from '@/components/ui/Tabs/Tabs';

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
          <div className={cx('tabs-container')}>
            <Tabs />
          </div>
          <ProjectGrid />
        </section>
      </div>
    </PageDataProviderWrapper>
  );
}
