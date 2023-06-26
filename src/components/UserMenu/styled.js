import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #0070ba;
  background-color: #e8e8e8;
  color: #fff;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #0070ba;
    color: #fff;
  }
`;

export const Text = styled.p`
  font-weight: 700;
`;
