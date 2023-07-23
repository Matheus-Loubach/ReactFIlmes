import React from 'react'
import '../ComponentsCSS/Carousel.css'
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import * as S from './style';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const MontagemCarrosel = ({ dados }) => {

  const isWideScreen = window.innerWidth > 640;

  return (
      
    <div className='Ultimos'>
      
      <h1>Recomendados</h1>
      <S.StyledSlide
        breakpoints={{
          200: { slidesPerView: 4 },
          640: { slidesPerView: 7 },
          900: { slidesPerView: 8 },
          1020: { slidesPerView: 10 },
          1280: { slidesPerView: 4 },
        }}
        spaceBetween={70}
        pagination={{
          type: 'progressbar',
        }}

        navigation={isWideScreen} // Ativa a navegação somente quando for maior que 640
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {dados ?  dados.all.slice(Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 20) + 51).map((item) => <SwiperSlide key={item.id}>  <a href={`/Movie/${item.nome}/`}><img className='grid-item' src={item.img} alt='capaFilme' /></a>  </SwiperSlide>) : <span>Carregando... Aguarde</span>}

      </S.StyledSlide>
    </div>
  )
}

export default MontagemCarrosel