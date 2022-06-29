import React from 'react';
import style from "./style.module.scss";
import productImg from "../../../assets/img/image/Rectangle65.png";

const CartComponent: React.FC = () => {
  return (
    <div className={ style.wrapper }>
      <img src={ productImg } alt="" className={ style.img } />
      <div className={ style.text }>Мезофильная закваска Danisco CHOOZIT MM...</div>
      <div className={ style.content }>
        <div className={ style.cost }>
          <div className={ style.costNow }>1300₽/ 1 шт.</div>
          <div className={ style.costLast }>1800₽</div>
        </div>
        <button className={ style.byButton }>Добавить</button>
      </div>
    </div>
  )
}

export default CartComponent;