import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './TextField.module.scss';

const cx = classNames.bind(styles);

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, type, required, label, helperText, ...props }, ref) => {
    return (
      <div className={cx('textfield', required && 'is-required', className)}>
        {label && <span className={cx('label')}>{label}</span>}
        <input type={type} ref={ref} {...props} />
        {helperText && <p className={cx('helper')}>{helperText}</p>}
      </div>
    );
  }
);

export default TextField;

TextField.displayName = 'TextField';
