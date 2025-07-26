// import { getNotionPages } from '@/lib/notion';
// import type { NotionPage } from '@/lib/notion/schema';
// import { useQuery } from '@tanstack/react-query';

import classnames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classnames.bind(styles);

const HomePage = () => {
  // const { data, isLoading, error } = useQuery<NotionPage[]>({
  //   queryKey: ['notion-pages'],
  //   queryFn: getNotionPages,
  // });

  // if (isLoading) return <p>로딩 중...</p>;
  // if (error) return <p>에러: {(error as Error).message}</p>;

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        <div>The Archive</div>
        <div>2021 - {new Date().getFullYear()}</div>
      </h2>
      {/* <ul>{data && data.map(page => <li key={page.id}>{JSON.stringify(page)}</li>)}</ul> */}
    </div>
  );
};

export default HomePage;
