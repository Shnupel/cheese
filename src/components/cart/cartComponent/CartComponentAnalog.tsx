import React from 'react';
import style from "./style.module.scss";
import productImg from "../../../assets/img/image/Rectangle65.png";

const CartComponentAnalog = () => {
  return (
    <div className={ style.wrapperAnalog }>
      <img src={ productImg } alt="" className={ style.img } />
      <div className={ style.content }>
      <div className={ style.text }>Мезофильная закваска Danisco CHOOZIT MM...</div>
        <div className={ style.cost }>1300₽/ 1 шт.</div>
      </div>
    </div>
  )
}

export default CartComponentAnalog