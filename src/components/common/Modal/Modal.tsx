import React from 'react';
import ModalPortal from './ModalPortal';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);

export interface ModalProps {
  isOpen?: boolean;
  message?: string;
  onClose?: () => void;
}
const Modal = ({ isOpen = false, message, onClose }: ModalProps) => {
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={cx('modal-wrapper')}>
        <div className={cx('modal-overlay')} onClick={onClose}></div>
        <div className={cx('modal-layer')}>
          <div className={cx('modal-header')}></div>
          <div className={cx('modal-content')}>{message}</div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
