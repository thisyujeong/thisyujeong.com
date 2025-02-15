import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import metadata from 'data/metadata';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('message')}>
          <span>
            Thanks
            <br /> for watching
          </span>
        </div>
        <div className={cx('contact')}>
          <a className={cx('email')} href={`mailto:${metadata.user.email}`}>
            {metadata.user.email}
          </a>
        </div>
        <div className={cx('copyright')}>
          <p>
            {`©${metadata.user.nickname} ${new Date().getFullYear()}, All Rights
            Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
