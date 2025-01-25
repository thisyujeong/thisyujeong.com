import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('contact')}>
          <button>
            <span>Get in touch</span>
          </button>
        </div>
        <div className={cx('message')}>
          <span>Thanks for watching</span>
        </div>
        <div className={cx('copyright')}>
          <p>© thisyujeong 2025, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
