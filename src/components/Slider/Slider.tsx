import * as S from './styles';

export function Slider() {
  return (
    <S.Slider>
      <S.Slide>
        <input type="radio" id="slide1" name="slide" />
      </S.Slide>
      <S.Slide>
        <input type="radio" id="slide2" name="slide" />
      </S.Slide>
      <S.Slide>
        <input type="radio" id="slide3" name="slide" />
      </S.Slide>
      <S.Slide>
        <input type="radio" id="slide4" name="slide" />
      </S.Slide>
    </S.Slider>
  );
}
