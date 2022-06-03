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
    color: #3e3e3e;
  }
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 40px 40px 50px 40px;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  &:last-of-type {
    margin-top: 24px;
  }

  label {
    font-size: 12px;
    color: #3e3e3e;
  }

  input,
  button {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
  }

  input {
    border: 2px solid white;
    outline: none;
    appearance: none;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    :focus-within {
      border: 2px solid #0981e7;
    }
  }

  button {
    cursor: pointer;
    margin-top: 16px;
    border: none;
    background-color: #035397;
    color: white;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: 0.2em;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    transition: 0.3s background-color, 0.3s transform, 0.3s box-shadow;

    :hover {
      background-color: #0981e7;
      transform: translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.12) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 4px 4px, rgba(0, 0, 0, 0.12) 0px 8px 8px,
        rgba(0, 0, 0, 0.12) 0px 16px 16px;
    }

    :disabled {
      background: black;
    }
  }
`;
