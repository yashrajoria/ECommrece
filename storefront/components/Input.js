import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
