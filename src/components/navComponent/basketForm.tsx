import React from 'react';
import { useSelector } from 'react-redux';
import { basketSliceSource } from '../../redux/slises/BasketSlice';
import BasketProductCart from '../../pages/basketPage/product';
import style from "./style.module.scss";

const BasketForm: React.FC = () => {
  const carts = useSelector(basketSliceSource);
  return (
    <div className={ style.basketForm }>
      <div className={ style.title }>{ carts.length ?  ( <span> корзина ({ carts.length }) </span> ) : ( <span>в корзине ничего нет</span> ) } </div>
      <div className={ style.baketCarts }>
        {
          carts.map(cart => <BasketProductCart key={ cart.id } data={ cart } />)
        }
      </div>
    </div>
  )
}

export default BasketForm;