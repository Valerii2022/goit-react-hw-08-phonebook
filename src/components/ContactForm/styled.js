import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #0070ba;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 1px 1px 3px 0px #0070ba;
`;

export const AddContactBtn = styled.button`
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #004d80;
  background-color: #004d80;
  color: #fff;
  outline: none;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #bbe4ff;
    color: #004d80;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 16px;
  padding: 10px;
  color: #2d2d2d;
  border: 1px solid #8e8e8e;
  background-color: #e8e8e8;
  outline: none;
  border-radius: 3px;
  transition: box-shadow 250ms linear;
  :focus {
    box-shadow: 0px 0px 8px #004d80;
  }
  @media screen and (max-width: 468px) {
    width: 200px;
  }
`;
