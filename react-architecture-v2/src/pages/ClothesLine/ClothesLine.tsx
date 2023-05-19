import { AppContainer } from '../../containers';
import * as S from './styles';
import productList from '../../mocks/products.json';
import { ProductBox } from '../../components';

function ClothesLine() {
  return (
    <AppContainer>
      <S.Container>
        <S.Content>
          {productList.map((product) => (
            <ProductBox key={product._id} data={product} />
          ))}
        </S.Content>
      </S.Container>
    </AppContainer>
  );
}

export default ClothesLine;
