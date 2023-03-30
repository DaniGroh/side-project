import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  position: absolute;
`;

export const HelpList = styled.div`
  position: fixed;
  bottom: 55px;
  right: 55px;
  display: flex;
  text-align: right;
  align-items: flex-end;
  flex-direction: column;

  button {
    padding: 20px;
    border-radius: 40px;
    background-color: ${theme.colors.white};
    font-size: 16px;
    margin: 5px;
    width: max-content;
    text-align: end;
    z-index: 10;

    :hover {
      background-color: ${theme.colors.grey};
    }
  }
`;

export const HelpIcon = styled.button`
  position: fixed;
  bottom: 55px;
  right: 55px;
  padding: 20px;
  border-radius: 40px;
  background-color: ${theme.colors.white};
  font-size: 16px;
  border: 1px solid ${theme.colors.grey};
  z-index: 999;

  :hover {
    background-color: ${theme.colors.grey};
  }
`;
export const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background-color: ${theme.colors.white};
`;
