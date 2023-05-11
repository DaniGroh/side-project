import * as S from './styles';
import { IAppContainerProps } from './interfaces';

export default function AppContainer({ children }: IAppContainerProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
