import React from "react";
import styled from "styled-components";
import checkedIcon from "../images/checked.svg";

function Checkbox({ setCheckedStatus, checkedStatus }) {
  return (
    <CheckBox
      type="Checkbox"
      onChange={() => setCheckedStatus(!checkedStatus)}
      checked={checkedStatus}
    />
  );
}

export default Checkbox;

const CheckBox = styled.input`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e3e4f1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 14px;
  left: 20px;
  &:checked {
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
  &::before {
    content: "";
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media (min-width: 1200px) {
    top: 20px;
    left: 24px;
    width: 24px;
    height: 24px;
  }
`;
