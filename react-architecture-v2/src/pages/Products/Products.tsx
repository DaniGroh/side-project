import { AppContainer } from '../../containers';
import * as S from './styles';

function Products() {
  return (
    <AppContainer>
      <S.Container>
        <S.Title>Aqui estão nossos produtos</S.Title>
        <S.SubTitle>O que você está procurando?</S.SubTitle>
      </S.Container>
    </AppContainer>
  );
}

export default Products;
