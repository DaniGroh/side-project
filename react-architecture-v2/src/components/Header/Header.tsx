import { MdOutlineShoppingBag, MdSearch } from 'react-icons/md';
import * as S from './styles';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>
        <S.Nav>
          <S.NavItem type="button">Novidades</S.NavItem>
          <S.NavItem type="button">Produtos</S.NavItem>
          <S.NavItem type="button">História</S.NavItem>
        </S.Nav>
        <S.Actions>
          <S.Login>entrar</S.Login>
          <S.Search>
            <MdSearch size={22} />
          </S.Search>
          <S.Bag>
            <MdOutlineShoppingBag size={22} />
            <S.ItensOnBag>1</S.ItensOnBag>
          </S.Bag>
        </S.Actions>
      </S.Header>
    </S.Container>
  );
}
