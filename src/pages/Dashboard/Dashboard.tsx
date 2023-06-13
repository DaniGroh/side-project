/* eslint-disable react/jsx-boolean-value */
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import farm1 from '../../assets/farm1.jpg';
import farm2 from '../../assets/farm2.jpg';
import farm3 from '../../assets/farm3.jpg';
import * as S from './styles';

function Dashboard() {
  return (
    <S.Container>
      <Swiper
        pagination={{ clickable: true }}
        style={{ display: 'block' }}
        modules={[Pagination, Navigation]}
        loop={true}
        navigation={true}
      >
        {/* ToDo: Letreiro chamando para ver produtos e banner clicavel direcionanado para a tela dos produtos */}
        <SwiperSlide>
          <img src={farm1} alt="Imagem1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={farm2} alt="Imagem2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={farm3} alt="Imagem3" />
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
}

export default Dashboard;
