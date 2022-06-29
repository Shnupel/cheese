import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import CartComponentAnalog from '../cartComponent/CartComponentAnalog';
import CartComponent from '../cartComponent/CartComponent';
import style from "./style.module.scss";

const CartSlider: React.FC<{ type: string }> = (props) => {
  const CartSlide = props.type === "analog" ? CartComponentAnalog : CartComponent;
  const slidesPerView = props.type === "analog" ? 3 : 5 
  return (
    <>
      <Swiper
        slidesPerView={ slidesPerView }
        spaceBetween={20}
        className={ style.slider }
      >
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
        <SwiperSlide className={ style.slide }> <CartSlide /> </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CartSlider;