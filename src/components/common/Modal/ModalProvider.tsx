'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

import Modal, { type ModalProps } from './Modal';

interface ModalContextProps {
  showModal: (options: ModalProps) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOptions, setModalOptions] = useState<ModalProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = useCallback((options: ModalProps) => {
    document.body.classList.add('scroll-lock');

    setModalOptions(options);
    setIsOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    document.body.classList.remove('scroll-lock');

    setModalOptions(null);
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({ showModal, hideModal }), []);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          modalOptions?.onClose?.();
          hideModal();
        }}
        {...modalOptions}
      />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
