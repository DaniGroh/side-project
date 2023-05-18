import { AppContainer } from '../../containers';
import * as S from './styles';
import productArray from '../../mocks/products.json';
import { ProductBox } from '../../components';

function Products() {
  return (
    <AppContainer>
      <S.Container>
        <S.Content>
          {productArray.map((product) => (
            <ProductBox key={product._id} product={product} />
          ))}
        </S.Content>
      </S.Container>
    </AppContainer>
  );
}

export default Products;
