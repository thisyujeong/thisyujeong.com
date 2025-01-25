'use client';

import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ onClick, children, ...props }: PropsWithChildren<ButtonProps>) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
  };
  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
