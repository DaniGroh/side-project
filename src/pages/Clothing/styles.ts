import styled, { css } from 'styled-components';
import { theme } from '../../styles';

interface SizeAvailableStyleProps {
  available: boolean;
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const ClothingImage = styled.img`
  width: 50%;
`;

export const ClothingInfo = styled.div`
  display: block;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: ${theme.fontWeight.bold};
`;

export const Payment = styled.div`
  margin: 20px 0px;
`;

export const Price = styled.div`
  font-size: 17px;
  font-weight: ${theme.fontWeight.semiBold};
`;

export const Installment = styled.div`
  margin-top: 5px;
  font-size: 15px;
  font-weight: ${theme.fontWeight.normal};
`;

export const SizeContainer = styled.div`
  display: block;
  height: 50px;
  align-items: center;
  span {
    font-size: 17px;
    font-weight: ${theme.fontWeight.semiBold};
  }
`;

export const Size = styled.div`
  display: flex;
`;

export const SizeBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border: 1px solid ${theme.colors.black};
  margin-right: 5px;
  background-color: ${theme.colors.white};

  ${({ available, selected }: SizeAvailableStyleProps) => css`
    ${!available &&
    `
        background-color: ${theme.colors.darkGrey};
        :hover {
          background-color: ${theme.colors.darkGrey};
          color: ${theme.colors.black};
        }`}
    ${selected &&
    `
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    `}
  `}
`;

export const PurchaseContainer = styled.div`
  margin: 20px 0px;
`;

export const Purchase = styled.button`
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;

export const PurchaseLater = styled.div`
  display: flex;
`;

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid ${theme.colors.black};
`;

export const WhishList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  padding: 15px;
  border: 1px solid ${theme.colors.black};
`;

export const Shipping = styled.div`
  display: flex;
  align-items: center;
`;

export const EstimateShipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ZipCode = styled.div`
  display: flex;
  margin-left: 2px;
  height: 40px;

  input {
    width: 100%;
    padding-left: 10px;
  }
`;

export const ConfirmZipCode = styled.button`
  height: 40px;
  width: 40px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;

export const ShippingValue = styled.div`
  display: block;
  margin-top: 8px;
`;

export const ShippingMode = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 3fr;
  span {
    font-size: 12px;
  }
`;

export const ShippingInfo = styled.div`
  font-weight: ${theme.fontWeight.semiBold};
`;
export const ShippinValue = styled.div`
  font-weight: ${theme.fontWeight.semiBold};
  display: flex;
  display: flex-end;
`;

export const InvalidZipCode = styled.span`
  color: ${theme.colors.red};
`;
