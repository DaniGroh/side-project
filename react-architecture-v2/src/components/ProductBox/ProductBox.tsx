import { useState } from 'react';
import { IProductBoxProps } from './interfaces';
import * as S from './styles';

export function ProductBox({ product }: IProductBoxProps) {
  const [sizeVisible, setSizeVisible] = useState(false);

  return (
    <S.Container>
      <S.ProductBanner
        onMouseOver={() => setSizeVisible(true)}
        onMouseLeave={() => setSizeVisible(false)}
      >
        <S.ProductImage src={product.image} alt="Banner" />
        <S.SizeContainer visible={sizeVisible}>
          {product.size.map((possibleSize) =>
            possibleSize.available ? (
              <S.SizeAvailabel key={possibleSize.sizeName}>
                {possibleSize.sizeName}
              </S.SizeAvailabel>
            ) : (
              <S.SizeUnavailabel key={possibleSize.sizeName}>
                {possibleSize.sizeName}
              </S.SizeUnavailabel>
            )
          )}
        </S.SizeContainer>
      </S.ProductBanner>

      <S.Title>{product.name}</S.Title>
      <S.Price>R$ {product.price.toFixed(2)}</S.Price>
      <S.Installment>
        {product.installments.numberOfInstallments}x de R${' '}
        {product.installments.priceOfInstallments.toFixed(2)}
      </S.Installment>
    </S.Container>
  );
}
