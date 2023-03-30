import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-color: ${theme.colors.black};
    diplay: flex;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
`;
