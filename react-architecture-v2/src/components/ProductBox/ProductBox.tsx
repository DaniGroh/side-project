import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IProductBoxProps } from './interfaces';
import * as S from './styles';

export function ProductBox({ data }: IProductBoxProps) {
  const [sizeVisible, setSizeVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate('/produto', { state: { data } })}>
      <S.ProductBanner
        onMouseOver={() => setSizeVisible(true)}
        onMouseLeave={() => setSizeVisible(false)}
      >
        <S.ProductImage src={data.image} alt="Banner" />
        <S.SizeContainer visible={sizeVisible}>
          {data.size.map((possibleSize) =>
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

      <S.Title>{data.name}</S.Title>
      <S.Price>R$ {data.price.toFixed(2)}</S.Price>
      <S.Installment>
        {data.installments.numberOfInstallments}x de R${' '}
        {data.installments.priceOfInstallments.toFixed(2)}
      </S.Installment>
    </S.Container>
  );
}
