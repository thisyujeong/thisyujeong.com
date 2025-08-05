import { type PropsWithChildren } from 'react';
import classnames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '../Footer/Footer';

const cx = classnames.bind(styles);

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx('wrapper')}>
      <main className={cx('main')}>{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
