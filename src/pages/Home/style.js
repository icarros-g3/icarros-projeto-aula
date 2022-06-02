import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  max-width: 400px;
  width: 100%;
  margin-bottom: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
  }

  input,
  button {
    padding: 10px;
    font-size: 16px;
  }

  input:focus-within {
    background-color: #0ffd;
  }

  button {
    cursor: pointer;
    margin-top: 16px;
  }
`;
