import React from 'react';
import styles from './Footer.module.scss';
import classnames from 'classnames/bind';
import { metadata } from '@/constants/metadata';

const cx = classnames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-content')}>
        <div className={cx('contact')}>
          <div className={cx('contact-email')}>
            <a href={`mailto:${metadata.email}`}>Drop me a line (-&gt;)</a>
          </div>

          <p className={cx('copyright')}>
            ©{new Date().getFullYear()}{' '}
            <a href={metadata.link.github} target="_blank">
              {metadata.nickname}
            </a>{' '}
            ― All rights reserved.
          </p>
        </div>

        <div className={cx('col-module')}>
          <div className={cx('col-title')}>Stack</div>
          <ul className={cx('col-list')}>
            {metadata.stack.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={cx('col-module')}>
          <div className={cx('col-title')}>Links</div>
          <ul className={cx('col-list')}>
            {metadata.links.map(item => (
              <li key={item.label}>
                <a href={item.url} target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
