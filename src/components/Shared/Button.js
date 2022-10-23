import React from 'react';
import styled from 'styled-components';

const Button = ({ type, children, onClick, className, disabled }) => {
  return (
    <DefaultButton type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </DefaultButton>
  );
};

const DefaultButton = styled.button`
  display: inline-block;
  cursor: pointer;
`;

export default Button;
