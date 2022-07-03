import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import CartComponentAnalog from '../cartComponent/CartComponentAnalog';
import CartComponent from '../cartComponent/CartComponent';
import style from "./style.module.scss";

const CartSlider: React.FC<{ type: string }> = (props) => {
  const CartSlide = props.type === "analog" ? CartComponentAnalog : CartComponent;
  const ourProducts = useSelector((state: RootState) => state.product.Products);
  const slidesPerView = props.type === "analog" ? 3 : 5 ;
  return (
    <>
      <Swiper
        slidesPerView={ slidesPerView }
        spaceBetween={20}
        className={ style.slider }
      >
        {
          ourProducts.map((product, i) => <SwiperSlide key={ i } className={ style.slide }> <CartSlide product={ product } /> </SwiperSlide>)
        }
      </Swiper>
    </>
  )
}

export default CartSlider;