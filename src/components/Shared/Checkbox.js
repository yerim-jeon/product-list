import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ id, label, name, onChange, checked }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  text-align: center;

  label {
    overflow: hidden;
    display: block;
    font-size: 14px;
    line-height: 1;
    box-sizing: border-box;
  }

  input {
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 1px;
    background: #fff;
    -webkit-appearance: none;
  }

  input:checked {
    background: #fff;
  }

  input[type=checkbox]:checked {
    border: 1px solid #2c83e9;
  }

  input:before {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-color: #fff;
    transform: translate(-50%, -50%);
  }

  input[type=checkbox]:before {
    width: 11px;
    height: 4px;
    margin: -4px 0 0 -5px;
    transform: rotate(-45deg);
  }

  input[type=checkbox]:checked:before {
    content: "";
    width: 9px;
    height: 5px;
    border: solid #2c83e9;
    border-width: 0 0 2px 2px;
  }
`;

export default Checkbox;
