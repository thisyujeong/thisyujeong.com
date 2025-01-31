import React from 'react';
import ModalPortal from './ModalPortal';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Image from 'next/image';
const cx = classNames.bind(styles);

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title: string;
  startDate: string;
  endDate: string;
  type: string;
  tags: string[];
  thumbnailUrl?: string;
  contentHtml?: string;
}
const Modal = ({
  isOpen = false,
  title,
  startDate,
  endDate,
  type,
  tags,
  thumbnailUrl,
  contentHtml,
  onClose,
}: ModalProps) => {
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={cx('modal-wrapper')}>
        <div className={cx('modal-overlay')} onClick={onClose}></div>
        <div className={cx('modal-layer')}>
          <div className={cx('modal-header')}>
            <strong>{title}</strong>
            <button onClick={onClose}>
              <span className="sr-only">닫기</span>
            </button>
          </div>
          <div className={cx('modal-content')}>
            <div className={cx('modal-content__inner')}>
              <span className={cx('date')}>{`${startDate} - ${endDate}`}</span>
              <span className={cx('type')}>{type}</span>
              <div className={cx('tags')}>
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {thumbnailUrl && (
                <div className={cx('thumbnail')}>
                  <Image src={thumbnailUrl} alt={title} fill priority />
                </div>
              )}
              {contentHtml && <div dangerouslySetInnerHTML={{ __html: contentHtml }} />}
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
