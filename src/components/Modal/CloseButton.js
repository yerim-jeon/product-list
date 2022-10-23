import React from 'react';
import styled from 'styled-components';

const CloseButton = ({ text, closeModal }) => {
  return (
    <Button
      type="button"
      aria-label="닫기"
      onClick={closeModal}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  :before,
  :after {
    content: "";
    z-index: 10;
    position: absolute;
    top: 24px;
    left: 17px;
    width: 15px;
    height: 1px;
    background-color: black;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`;

export default CloseButton;
