import styled from 'styled-components';
import { theme } from '../../styles';

export const Slider = styled.ul`
  display: block;
  width: 100%;
  height: 300px;
  margin: auto;
  position: relative;

  input {
    display: none;
  }
`;

export const Slide = styled.li`
  list-style: none;
  scroll.snap-align: start;
  flex-shrink: 0;

  background: ${theme.colors.grey};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;

  img {
    margin: auto;
    vertical-align: top;
  }
`;
