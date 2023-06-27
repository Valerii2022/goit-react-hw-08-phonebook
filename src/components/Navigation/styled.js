import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  background-color: #004d80;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #004d80;
  width: 98px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #bbe4ff;
    color: #004d80;
  }
  &.active {
    background-color: #bbe4ff;
    color: #004d80;
  }
  @media screen and (max-width: 468px) {
    width: 68px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
