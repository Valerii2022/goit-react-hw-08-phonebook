import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const ListItem = styled.li`
  width: 130px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  background-color: #deedf8;
  box-shadow: 1px 1px 3px 0px #deedf8;
  border-radius: 5px;
  padding: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const DeleteBtn = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fbcccc;
  border: 1px solid #de2222;
  color: #de2222;
  outline: none;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #de2222;
    color: #fff;
  }
`;
