import styled, { css } from 'styled-components';
import { theme } from '../../styles';

interface SizeStyleProps {
  visible: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  padding-bottom: 20px;
  cursor: pointer;
`;

export const ProductBanner = styled.div`
  display: block;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: ${theme.font.weight.semiBold};
  font-size: 18px;
`;

export const Price = styled.div`
  color: ${theme.colors.darkGrey};
  display: flex;
  justify-content: center;
`;

export const SizeContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  opacity: 75%;
  background-color: ${theme.colors.lightGrey};
  z-index: 9;
  bottom: 0px;

  ${({ visible }: SizeStyleProps) => css`
    ${!visible && 'opacity: 0%'}
  `}
`;

export const SizeAvailabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 1px solid ${theme.colors.black};
  border-radius: 60px;
  margin: 5px;
  background-color: ${theme.colors.grey};

  :hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }
`;

export const SizeUnavailabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 1px solid ${theme.colors.black};
  border-radius: 60px;
  margin: 5px;
  background-color: ${theme.colors.darkGrey};
`;

export const Installment = styled.div`
  color: ${theme.colors.darkGrey};
  display: flex;
  justify-content: center;
`;
