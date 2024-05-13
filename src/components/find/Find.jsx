import React from 'react'
import styles from './Find.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, Ally } from 'swiper/modules';
import Card from './Card';


const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.header}>
            <h1>Find Your Drive</h1>
        </div>
        <div className={styles.text_bg}>
            <p>explore the world largest car sharing market</p>
        </div>
        <div className={styles.swiper_container}>
        <Swiper
        modules={[ Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        // when window width is >= 340px
        340: {
          width: 200,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 4,
        },
        // when window width is >= 1040px
        1040: {
          width: 1040,
          slidesPerView: 5,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D' name='Audi'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D' name='Ferrari'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfDB8MHx8fDA%3D' name='BMW'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfDB8MHx8fDA%3D' name='Benz'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfDB8MHx8fDA%3D' name='Folex'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfDB8MHx8fDA%3D' name='Benz'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D' name='Audi'/>
      </SwiperSlide>
      <SwiperSlide>
        <Card image='https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D' name='Ferrari'/>
      </SwiperSlide>
      </Swiper>
        </div>
      
    </div>
  )
}

export default Find

