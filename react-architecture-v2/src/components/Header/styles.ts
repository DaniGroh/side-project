import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-wrap: no-wrap;
  magin: auto;

  background-color: ${theme.colors.white};
  button {
    background-color: ${theme.colors.white};
  }
`;

export const Logo = styled.button`
  padding: 5px 10px;
  img {
    max-width: 120px;
  }
`;

export const Nav = styled.div`
  height: 100%;
`;
export const NavItem = styled.button`
  padding: 10px 16px;
  height: 100%;
  :hover {
    background-color: ${theme.colors.grey};
  }
`;

export const Actions = styled.div`
  display: flex;
  svg {
    margin-bottom: -3px;
  }
`;

export const Login = styled.button`
  padding: 5px;
`;

export const Search = styled.div`
  padding: 5px;
`;

export const Bag = styled.button`
  padding: 5px;
`;

export const ItensOnBag = styled.div`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 3px;
  border-radius: 100px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  margin-left: -10px;
`;
