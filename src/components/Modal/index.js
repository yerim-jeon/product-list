import React, { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { ModalContext } from '../../contexts/ModalContext';

import CloseButton from './CloseButton';

const Modal = () => {
  const { isModalOpened, handleModal, modalContent } = useContext(ModalContext);
  const modalRef = useRef();

  const clickDimmed = (event) => {
    if (!modalRef.current || modalRef.current.contains(event.target)) {
      return;
    }

    handleModal(null);
  };

  const renderModal = () => {
    if (!isModalOpened) {
      return null;
    }

    return (
      <Dimmed onClick={clickDimmed}>
        <Wrapper ref={modalRef}>
          <CloseButton closeModal={() => handleModal(null)}>닫기</CloseButton>
          {modalContent}
        </Wrapper>
      </Dimmed>
    );
  };

  return (
    <>
      {createPortal(
        renderModal(),
        document.getElementById('modal'),
      )}
    </>
  );
};

const Dimmed = styled.div`
  z-index: 10;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  position: relative;
  width: 1140px;
  height: 620px;
  background-color: #fff;
`;

export default Modal;
