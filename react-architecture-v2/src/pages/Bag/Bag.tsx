import { useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import { CgTrash } from 'react-icons/cg';
import CustomerBag from '../../mocks/bag.json';
import * as S from './styles';

function Bag() {
  const [clientZipCode, setClientZipCode] = useState('');
  const [shippingPrice, setShippingPrice] = useState('');
  const [calculatedShipping, setCalculatedShipping] = useState(false);
  const [discount, setDiscount] = useState(false);

  const totalProductPrice = useMemo(() => {
    return CustomerBag.reduce((a, b) => a + b.price * b.amount, 0);
  }, [CustomerBag]);

  const totalPrice = useMemo(() => {
    const totalValue = totalProductPrice + Number(shippingPrice);

    return totalValue;
  }, [totalProductPrice, shippingPrice]);

  const RemoveItem = (index: number) => {
    CustomerBag.splice(index, 1);
  };

  return (
    <S.Container>
      <S.Title>SUA SACOLA</S.Title>
      <S.OrderInfo>
        <S.ProductList>
          <S.TableTitle>
            <span>Produto</span>
            <span>Tamanho</span>
            <span>Quantidade</span>
            <span>Preço Unitário</span>
          </S.TableTitle>
          {CustomerBag &&
            CustomerBag.map((product) => (
              <S.ProductInfo key={product._id}>
                <S.TableItem>
                  <S.ProductImage src={product.image} alt="Product Image" />
                  {product.name}
                </S.TableItem>
                <S.ProductSize>{product.size}</S.ProductSize>
                <S.ProductAmount>{product.amount}</S.ProductAmount>
                <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
                <S.RemoveItem
                  onClick={() => RemoveItem(CustomerBag.indexOf(product))}
                >
                  <CgTrash size={22} />
                </S.RemoveItem>
              </S.ProductInfo>
            ))}
        </S.ProductList>
        <S.OrderResume>
          <S.InputField>
            <S.InputFieldTitle>
              Calcule o frete e prazo de entrega
            </S.InputFieldTitle>
            <S.Code>
              <InputMask
                mask="99999-999"
                value={clientZipCode}
                placeholder="Insira seu CEP"
                onChange={(e) => {
                  setClientZipCode(e.target.value);
                }}
              />
              <S.ConfirmCode onClick={() => setCalculatedShipping(true)}>
                OK
              </S.ConfirmCode>
            </S.Code>
            {calculatedShipping &&
              clientZipCode.match(/^[0-9]{5}-[0-9]{3}$/) && (
                <S.ShippingValue>
                  Escolha abaixo uma das opções de frete:
                  <S.ShippingMode>
                    <S.ShippingSelect
                      type="radio"
                      onClick={() => setShippingPrice('15')}
                      name="shippingValue"
                    />
                    <S.ShippingInfo>Sedex </S.ShippingInfo>
                    <span>5 dia(s) utíl(eis) </span>
                    <S.ShippinValue>R$15,00</S.ShippinValue>
                  </S.ShippingMode>
                  <S.ShippingMode>
                    <S.ShippingSelect
                      type="radio"
                      onClick={() => setShippingPrice('20')}
                      name="shippingValue"
                    />
                    <S.ShippingInfo>Expressa </S.ShippingInfo>
                    <span>2 dia(s) utíl(eis) </span>
                    <S.ShippinValue>R$20,00</S.ShippinValue>
                  </S.ShippingMode>
                  <S.ShippingMode>
                    <S.ShippingSelect
                      type="radio"
                      onClick={() => setShippingPrice('7')}
                      name="shippingValue"
                    />
                    <S.ShippingInfo>Econômica </S.ShippingInfo>
                    <span>7 dia(s) utíl(eis) </span>
                    <S.ShippinValue>R$7,00</S.ShippinValue>
                  </S.ShippingMode>
                </S.ShippingValue>
              )}
            {calculatedShipping &&
              !clientZipCode.match(/^[0-9]{5}-[0-9]{3}$/) && (
                <S.ShippingValue>
                  <S.ShippingMode>
                    <S.InvalidZipCode>CEP inválido.</S.InvalidZipCode>
                  </S.ShippingMode>
                </S.ShippingValue>
              )}
          </S.InputField>
          <S.InputField>
            <S.InputFieldTitle>Cupom de desconto</S.InputFieldTitle>
            <S.Code>
              <InputMask mask="9999" placeholder="Digite seu cupom" />
              <S.ConfirmCode onClick={() => setDiscount(true)}>
                OK
              </S.ConfirmCode>
            </S.Code>
            {discount && (
              <S.ShippingValue>
                <S.ShippingMode>
                  <S.InvalidZipCode>Código inválido.</S.InvalidZipCode>
                </S.ShippingMode>
              </S.ShippingValue>
            )}
          </S.InputField>
          <S.OrderSumary>
            <S.OrderTitle>RESUMO DO PEDIDO</S.OrderTitle>
            <S.OrderPrice>
              Subtotal
              <span>R$ {totalProductPrice.toFixed(2)}</span>
            </S.OrderPrice>
            <S.OrderPrice>
              Frete <span>R$ {Number(shippingPrice).toFixed(2)}</span>
            </S.OrderPrice>
            <S.OrderPrice>
              Cupom <span>R$ {Number('0').toFixed(2)}</span>
            </S.OrderPrice>
            <S.FinishOrder>
              <S.TotalValue>
                TOTAL
                <span>R$ {totalPrice.toFixed(2)}</span>
              </S.TotalValue>
              <S.Installment>
                em até 6x sem juros de R$ {(totalPrice / 6).toFixed(2)}
              </S.Installment>
              <S.FinishButton>Finalizar Compra</S.FinishButton>
            </S.FinishOrder>
          </S.OrderSumary>
        </S.OrderResume>
      </S.OrderInfo>
    </S.Container>
  );
}

export default Bag;
