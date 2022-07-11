import React from 'react';
import { useDispatch } from 'react-redux';
import { addCart, decrementCart, deleteCart } from '../../redux/slises/BasketSlice';
import { ICartProduct } from '../../types/types';
import style from "./style.module.scss";

interface IProps{
  data: ICartProduct
}

const BasketProductCart: React.FC<IProps> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className={ style.productCart }>
      <img className={ style.image } src={ data.image[0] } alt="img" />
      <div className={ style.info }>
        <div className={ style.name }> { data.name } </div>
        <div className={ style.counterControl }>
          <button onClick={ () => dispatch(decrementCart(data)) }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
          <div className={ style.counter }> { data.counter } </div>
          <button onClick={ () => dispatch(addCart(data)) }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
        </div>
      </div>
      <div className={ style.right }>
        <svg onClick={ () => dispatch(deleteCart(data)) } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(253, 147, 57, 1)" className={ style.svg } viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
        <span> { data.cost } руб. </span>
      </div>
    </div>
  )
}

export default BasketProductCart;