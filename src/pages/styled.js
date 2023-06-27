import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FormInput = styled.input`
  width: 250px;
  font-size: 16px;
  padding: 10px;
  color: #2d2d2d;
  background-color: #e8e8e8;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 3px;
  transition: box-shadow 250ms linear;
  :focus {
    box-shadow: 0px 0px 8px #004d80;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #004d80;
  background-color: #004d80;
  color: #fff;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #bbe4ff;
    color: #004d80;
  }
`;
