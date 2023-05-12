import { useCallback } from 'react';
import { MdOutlineShoppingBag, MdSearch } from 'react-icons/md';
import logo from '../../assets/logo.png';
import { IHeaderProps, IPage } from './interfaces';
import * as S from './styles';

export function Header({ changePage }: IHeaderProps) {
  const pages: IPage[] = [
    {
      id: 'home',
      title: 'Pagina Inicial',
      link: '/',
    },
    {
      id: 'products',
      title: 'Produtos',
      link: '/produtos',
    },
  ];

  const handleSelectPage = useCallback(
    (pageLink: string) => {
      const pageArray = pages.find((page) => page.link === pageLink);
      if (pageArray) {
        changePage(pageArray.link);
      }
    },
    [pages]
  );

  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>
        <S.Nav>
          {pages.map((page) => (
            <S.NavItem
              type="button"
              key={page.link}
              onClick={() => handleSelectPage(page.link)}
            >
              {page.title}
            </S.NavItem>
          ))}
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
