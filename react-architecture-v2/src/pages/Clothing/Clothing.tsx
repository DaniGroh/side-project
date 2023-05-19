import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as S from './styles';

import { IStateLocation } from './interfaces';

function Clothing() {
  const location = useLocation();
  const [product, setProduct] = useState<IStateLocation>(location.state);
  return (
    <S.Container>
      Teste
      <S.Title>{product.data.name}</S.Title>
    </S.Container>
  );
}

export default Clothing;
