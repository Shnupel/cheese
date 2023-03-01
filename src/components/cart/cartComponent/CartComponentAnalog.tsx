import React from 'react';
import { Link } from 'react-router-dom';
import { ICartProduct } from '../../../types/CartType';
import style from "./style.module.scss";
interface IProps {
  product: ICartProduct
}

const CartComponentAnalog: React.FC<IProps> = ({ product }) => {
  return (
    <div className={ style.wrapperAnalog }>
      <Link to={ `/cartPage/${ product.id }` } onClick={ () => window.scrollTo({ top: 0 }) }><img src={ product.image[0] } alt="" className={ style.img } /></Link>
      <div className={ style.content }>
      <div className={ style.text }> { product.name } </div>
        <div className={ style.cost }> { product.cost } / 1 шт.</div>
      </div>
    </div>
  )
}

export default CartComponentAnalog