import React from "react";
import styled from "styled-components/macro";

export interface ButtonType {
  name: string;
}

function Button({ name }: ButtonType) {
  return <S_Button>{name}</S_Button>;
}

const S_Button = styled.button``;

export default Button;
