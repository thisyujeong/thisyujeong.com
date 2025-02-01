import classNames from 'classnames/bind';
import styles from './LoadingSpinner.module.scss';

const cx = classNames.bind(styles);

const LoadingSpinner = ({}) => {
  return (
    <div className={cx('loading-wrapper')}>
      <div className={cx('loading-overlay')}></div>
      <div className={cx('loading-spinner')}></div>
    </div>
  );
};

export default LoadingSpinner;
