import styled from "styled-components/macro";

export interface FormType {
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  children: React.ReactNode;
}

function Form({ onSubmit, children }: FormType) {
  return (
    <S_Form onSubmit={onSubmit} role="form">
      {children}
    </S_Form>
  );
}

const S_Form = styled.form``;

export default Form;
