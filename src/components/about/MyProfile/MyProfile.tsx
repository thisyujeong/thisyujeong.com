import classNames from 'classnames/bind';

import styles from './MyProfile.module.scss';
import ProfileCanvas from '../ProfileCanvas/ProfileCanvas';
const cx = classNames.bind(styles);

const MyProfile = () => {
  return (
    <div className={cx('profile-box')}>
      <div className={cx('profile-canvas')}>
        <ProfileCanvas />
      </div>
      <div className={cx('text')}></div>
    </div>
  );
};

export default MyProfile;
