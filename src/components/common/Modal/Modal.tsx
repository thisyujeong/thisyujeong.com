import React from 'react';
import ModalPortal from './ModalPortal';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title: string;
  contentHTML?: string;
}
const Modal = ({ isOpen = false, title, contentHTML, onClose }: ModalProps) => {
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={cx('modal-wrapper')}>
        <div className={cx('modal-overlay')} onClick={onClose}></div>
        <div className={cx('modal-layer')}>
          <div className={cx('modal-header')}>
            <span>{title}</span>
            <button className={cx('close')} onClick={onClose}>
              닫기
            </button>
          </div>
          <div className={cx('modal-content')}>
            {contentHTML && <div dangerouslySetInnerHTML={{ __html: contentHTML }} />}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
