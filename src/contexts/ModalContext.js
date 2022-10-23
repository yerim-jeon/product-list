import React, { createContext } from 'react';

import Modal from '../components/Modal';
import useModal from '../hooks/useModal';

const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const {
    isModalOpened,
    handleModal,
    modalContent,
  } = useModal();

  return (
    <Provider value={{ isModalOpened, handleModal, modalContent }}>
      {children}
      <Modal />
    </Provider>
  );
};

export { ModalContext, ModalProvider };
