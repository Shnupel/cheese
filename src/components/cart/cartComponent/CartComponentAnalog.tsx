import React from 'react';
import style from "./style.module.scss";
import { ICartProduct } from '../../../types/types';

interface IProps {
  product: ICartProduct
}

const CartComponentAnalog: React.FC<IProps> = ({ product }) => {
  return (
    <div className={ style.wrapperAnalog }>
      <img src={ product.image[0] } alt="" className={ style.img } />
      <div className={ style.content }>
      <div className={ style.text }> { product.name } </div>
        <div className={ style.cost }> { product.cost } / 1 шт.</div>
      </div>
    </div>
  )
}

export default CartComponentAnalog