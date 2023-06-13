import * as S from './styles';
import productList from '../../mocks/products.json';
import { ProductBox } from '../../components';

function ClothesLine() {
  return (
    <S.Container>
      <S.Content>
        {/* ToDo: opções de filtro */}
        {productList.map((product) => (
          <ProductBox key={product._id} data={product} />
        ))}
      </S.Content>
    </S.Container>
  );
}

export default ClothesLine;
