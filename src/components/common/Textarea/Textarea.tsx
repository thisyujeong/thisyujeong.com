import { forwardRef, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Textarea.module.scss';

const cx = classNames.bind(styles);

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, required, helperText, ...props }, ref) => {
    return (
      <div className={cx('textarea', required && 'is-required', className)}>
        <textarea ref={ref} {...props} />
        {helperText && <p className={cx('helper')}>{helperText}</p>}
      </div>
    );
  }
);

export default Textarea;

Textarea.displayName = 'Textarea';
