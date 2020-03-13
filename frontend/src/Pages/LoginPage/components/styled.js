import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 250px;
  max-width: 500px;
`
export const CreateAccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 450px;
  max-width: 500px;
`

export const Fieldset = styled.fieldset`
  display: flex;
  align-content: flex-end;
`

export const Label = styled.label`
  margin-right: 1em;
  font-family: OpenSans-Regular;
  font-size: 16px;
  color: #100B00;
`

export const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #E7E6F7;
  padding: 0.75em 1.25em;
  font-size: 16px;
  font-family: OpenSans-Regular;
  transition: all 0.2s ease-in;
  width: 100%;

  :focus {
    outline: none;
    background: transparent;
    border-bottom: 1px solid #231651;
  }

`

export const Button = styled.button`
  font-family: OpenSans-Regular;
  font-size: 16px;
  color: #100B00;
  background: #E7E6F7;
  border-radius: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 135px;
  text-align: center;
  transition: linear background-color 0.2s;
  margin-top: 0.5em;
  margin-bottom: 0.25em;

  :hover {
    cursor: pointer;
    background-color: #C0BDF5;
  }

  :active {
    border: 1px solid #231651;
  }
`;

export const AlertText = styled.p`
  color: red;
  font-family: OpenSans-Regular;
  font-size: 16px;
  opacity: 0;
  transition: all 0.2s linear;

  ${({ active }) => active && `
    opacity: 1;
`}
`;

export const AlertTextContainer = styled.div`
  height: 18px;
  margin-top: 0.5em;
`