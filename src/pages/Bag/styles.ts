import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.div``;

export const Title = styled.span`
  display block;
  font-size: 32px;
  font-weight: ${theme.fontWeight.bold};
  margin-top: 5px;
  margin-bottom: 10px; 
`;

export const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 5px;
`;

export const ProductList = styled.div``;

export const TableTitle = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr 2fr 2fr 1fr;
  gap: 5px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid ${theme.colors.lightGrey};
  border-bottom: 1px solid ${theme.colors.lightGrey};
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr 2fr 2fr 1fr;
  gap: 5px;
  padding: 5px;
  border-bottom: 1px solid ${theme.colors.lightGrey};
`;

export const TableItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductImage = styled.img`
  display: flex;
  align-items: center;
  height: 90px;
  margin: 5px;
`;

export const ProductSize = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductAmount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ProductResume = styled.div`
  display: flex;
`;

export const OrderResume = styled.div``;

export const InputField = styled.div`
  display: block;
  margin-bottom: 5px;
  padding: 16px 22px;
  background-color: ${theme.colors.lightGrey};
  align-items: center;
`;

export const InputFieldTitle = styled.div`
  margin-top: 5px;
`;

export const Code = styled.div`
  display: flex;
  height: 40px;
  margin-top: 10px;

  input {
    width: 100%;
    padding-left: 10px;
  }
`;

export const ConfirmCode = styled.button`
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
  grid-template-columns: 1fr 5fr 5fr 3fr;
  margin-top: 2px;
  span {
    font-size: 12px;
  }
`;

export const ShippingSelect = styled.input``;

export const ShippingInfo = styled.div`
  font-weight: ${theme.fontWeight.semiBold};
`;

export const ShippinValue = styled.div`
  font-weight: ${theme.fontWeight.semiBold};
  display: flex;
  justify-content: flex-end;
`;

export const InvalidZipCode = styled.span`
  color: ${theme.colors.red};
`;

export const OrderSumary = styled.div`
  margin-bottom: 5px;
  padding: 16px 22px;
  background-color: ${theme.colors.lightGrey};
`;

export const OrderTitle = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const OrderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const FinishOrder = styled.div`
  display: block;
  margin-top: 5px;
  border-top: 1px solid ${theme.colors.darkGrey};
  padding-top: 5px;
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const Installment = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: ${theme.fontWeight.light};
`;

export const FinishButton = styled.button`
  width: 100%;
  padding: 14px 28px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;
