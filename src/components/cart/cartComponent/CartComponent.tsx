import React from 'react';
import { Link } from 'react-router-dom';
import style from "./style.module.scss";
import { ICartProduct } from '../../../types/types';

const CartComponent: React.FC<{ product: ICartProduct }> = ({ product }) => {
  return (
    <div className={ style.wrapper }>
      <Link to="/"> <img src={ product.image[0] } alt="" className={ style.img } /> </Link>
      <div className={ style.text }> { product.name } </div>
      <div className={ style.content }>
        <div className={ style.cost }>
          <div className={ style.costNow }> { product.cost } / 1 шт.</div>
          { product.sale !== 0 && <div className={ style.costLast }> { product.sale } </div> }
        </div>
        <button className={ style.byButton }>Добавить</button>
      </div>
    </div>
  )
}

export default CartComponent;