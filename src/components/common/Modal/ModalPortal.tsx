import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface ModalPortalProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

export default function ModalPortal({ isOpen, children }: ModalPortalProps) {
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR) return <></>;
  if (!isOpen) return <></>;

  const node = document.getElementById('portal') as Element;
  return ReactDOM.createPortal(children, node);
}
