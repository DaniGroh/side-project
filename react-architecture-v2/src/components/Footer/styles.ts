import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  position: absolute;
  width: 100%;
`;

export const HelpList = styled.div`
  position: fixed;
  bottom: 55px;
  right: 55px;
  display: flex;
  text-align: right;
  align-items: flex-end;
  flex-direction: column;
  z-index: 999;

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
  height: 60px;
  padding: 20px 0px 20px 0px;
  text-align: center;
  background-color: ${theme.colors.white};
  color: #8c8c8c;
  border-top: 1px solid ${theme.colors.grey};
  margin-top: auto;
  margin-bottom: auto;
`;
