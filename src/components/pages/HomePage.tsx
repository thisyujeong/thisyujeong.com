import classnames from 'classnames/bind';
import styles from './HomePage.module.scss';
import ProjectList from '@/components/ui/ProjectList/ProjectList';

const cx = classnames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        <div>The Archive</div>
        <div>2021 - {new Date().getFullYear()}</div>
      </h2>
      <div className={cx('projects')}>
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;
