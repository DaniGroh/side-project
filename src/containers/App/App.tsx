import { useNavigate } from 'react-router-dom';
import { IAppContainerProps } from './interfaces';
import { Footer, Header } from '../../components';
import * as S from './styles';

export default function AppContainer({ children }: IAppContainerProps) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <Header changePage={navigate} />
        <S.ContentWrapper>{children}</S.ContentWrapper>
        <Footer />
      </S.Content>
    </S.Container>
  );
}
