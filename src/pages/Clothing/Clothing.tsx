import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineTruck } from 'react-icons/hi';
import InputMask from 'react-input-mask';
import * as S from './styles';

import { IStateLocation } from './interfaces';

function Clothing() {
  const location = useLocation();
  const [product, setProduct] = useState<IStateLocation>(location.state);
  const [calculatedShipping, setCalculatedShipping] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [clientZipCode, setClientZipCode] = useState('');

  return (
    <S.Container>
      <S.ClothingImage src={product.data.image} alt="Product Image" />
      <S.ClothingInfo>
        <S.Title>{product.data.name}</S.Title>
        <S.Payment>
          <S.Price>R${product.data.price.toFixed(2)} à vista</S.Price>
          <S.Installment>
            Em até {product.data.installments.numberOfInstallments}x R$
            {product.data.installments.priceOfInstallments.toFixed(2)} sem juros
          </S.Installment>
        </S.Payment>
        <S.SizeContainer>
          <span>Tamanho: {selectedSize}</span>
          <S.Size>
            {product.data.size.map((possibleSize) => (
              <S.SizeBox
                key={possibleSize.sizeName}
                onClick={() => {
                  if (possibleSize.available)
                    setSelectedSize(possibleSize.sizeName);
                }}
                available={possibleSize.available}
                selected={selectedSize === possibleSize.sizeName}
              >
                {possibleSize.sizeName}
              </S.SizeBox>
            ))}
          </S.Size>
        </S.SizeContainer>
        <S.PurchaseContainer>
          <S.Purchase>Comprar agora</S.Purchase>
          <S.PurchaseLater>
            <S.AddToCart>
              <MdOutlineShoppingBag size={22} />
              Adicionar à Sacola
            </S.AddToCart>
            <S.WhishList>
              <IoMdHeartEmpty size={22} />
              Adicionar aos desejos
            </S.WhishList>
          </S.PurchaseLater>
        </S.PurchaseContainer>
        <S.Shipping>
          <S.EstimateShipping>
            <HiOutlineTruck size={22} />
            Calcular o Frete
          </S.EstimateShipping>
          <S.ZipCode>
            <InputMask
              mask="99999-999"
              value={clientZipCode}
              placeholder="Insira seu CEP"
              onChange={(e) => {
                setClientZipCode(e.target.value);
              }}
            />
            <S.ConfirmZipCode onClick={() => setCalculatedShipping(true)}>
              OK
            </S.ConfirmZipCode>
          </S.ZipCode>
        </S.Shipping>
        {calculatedShipping && clientZipCode.match(/^[0-9]{5}-[0-9]{3}$/) && (
          <S.ShippingValue>
            <S.ShippingMode>
              <S.ShippingInfo>Sedex - </S.ShippingInfo>
              <span>5 dia(s) utíl(eis)</span>
              <S.ShippinValue>R$15,00</S.ShippinValue>
            </S.ShippingMode>
            <S.ShippingMode>
              <S.ShippingInfo>Expressa - </S.ShippingInfo>
              <span>2 dia(s) utíl(eis)</span>
              <S.ShippinValue>R$20,00</S.ShippinValue>
            </S.ShippingMode>
            <S.ShippingMode>
              <S.ShippingInfo>Econômica - </S.ShippingInfo>
              <span>7 dia(s) utíl(eis)</span>
              <S.ShippinValue>R$7,00</S.ShippinValue>
            </S.ShippingMode>
          </S.ShippingValue>
        )}
        {calculatedShipping && !clientZipCode.match(/^[0-9]{5}-[0-9]{3}$/) && (
          <S.ShippingValue>
            <S.ShippingMode>
              <S.InvalidZipCode>CEP inválido.</S.InvalidZipCode>
            </S.ShippingMode>
          </S.ShippingValue>
        )}
      </S.ClothingInfo>
      {/* ToDo: Seção com carrossel de mais produtos */}
    </S.Container>
  );
}

export default Clothing;
