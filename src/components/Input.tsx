import React from "react";
import styled from "styled-components/macro";

export interface InputProps {
  type?: string;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function Input({ type = "text", value, onChange }: InputProps) {
  return <S_Input type={type} value={value} onChange={onChange} />;
}

const S_Input = styled.input``;

export default Input;
