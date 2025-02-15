import { forwardRef, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Textarea.module.scss';

const cx = classNames.bind(styles);

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, required, label, helperText, ...props }, ref) => {
    return (
      <div className={cx('textarea', required && 'is-required', className)}>
        {label && <span className={cx('label')}>{label}</span>}
        <textarea ref={ref} {...props} />
        {helperText && <p className={cx('helper')}>{helperText}</p>}
      </div>
    );
  }
);

export default Textarea;

Textarea.displayName = 'Textarea';
