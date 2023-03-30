import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import * as S from './styles';

export function Footer() {
  const [help, setHelp] = useState(false);

  return (
    <S.Container>
      {!help && (
        <S.HelpIcon
          onClick={() => {
            setHelp(true);
          }}
        >
          ajuda?
        </S.HelpIcon>
      )}
      {help && (
        <S.HelpList>
          <button type="button">devolução</button>
          <button type="button">status do pedido</button>
          <button type="button">whatsapp</button>
          <button type="button">fala farm</button>
          <button
            type="button"
            onClick={() => {
              setHelp(false);
            }}
          >
            <MdClose />
          </button>
        </S.HelpList>
      )}
      <S.Footer> Aqui é o rodapé</S.Footer>
    </S.Container>
  );
}
