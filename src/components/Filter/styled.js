import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 30px;
  width: 330px;
`;

export const FindLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FindInput = styled.input`
  font-size: 16px;
  width: 300px;
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
