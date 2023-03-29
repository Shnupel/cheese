import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from "./style.module.scss";
import { ICartProduct } from '../../../types/CartType';
import { addProduct } from "../../../controllers/products";
import { addCart } from "../../../redux/slises/BasketSlice";

const CartComponent: React.FC<{ product: ICartProduct }> = ({ product }) => {
  const dispatch = useDispatch();
  const incrementProduct = () => {
    addProduct(product);
    dispatch(addCart(product));
  }

  return (
    <div className={ style.wrapper }>
      <Link to={ `/cartPage/${ product.id }` } onClick={ () => window.scrollTo({ top: 0 }) } > <img src={ product.image[0] } alt="" className={ style.img } /> </Link>
      <div className={ style.text }> { product.name } </div>
      <div className={ style.content }>
        <div className={ style.cost }>
          <div className={ style.costNow }> { product.cost } / 1 шт.</div>
          { product.sale !== 0 && <div className={ style.costLast }> { product.sale } </div> }
        </div>
        <button onClick={ () => incrementProduct() } className={ style.byButton }>Добавить</button>
      </div>
    </div>
  )
}

export default CartComponent;
