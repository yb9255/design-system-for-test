import styled from "styled-components/macro";

interface ButtonType {
  name: string;
}

function Button({ name }: ButtonType) {
  return <S_Button>{name}</S_Button>;
}

const S_Button = styled.button``;

export default Button;
