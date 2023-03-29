import React, { useState } from 'react';
import { ICartProduct } from '../../types/CartType';
import style from "./style.module.scss";
import { addProduct, removeProduct, deleteProduct as serverDeleteProduct } from "../../controllers/products";
import { useDispatch } from "react-redux";
import { addCart, decrementCart, deleteCart } from "../../redux/slises/BasketSlice";

interface IProps{
  data: ICartProduct
}

const BasketProductCart: React.FC<IProps> = ({ data }) => {
  const [productData, setProductData] = useState({...data, isActive: true});
  const dispatch = useDispatch();

  const incrementProduct = () => {
    setProductData((prevState) => ({...prevState, counter: prevState.counter+1}));
    addProduct(data)
    dispatch(addCart(data));
  }
  const decrementProduct = () => {
    if(productData.counter <= 1){
      deleteProduct();
      dispatch(decrementCart(data));
      return;
    }
    setProductData((prevState) => ({ ...prevState, isActive: true, counter: prevState.counter-1 }));
    removeProduct(data);
    dispatch(decrementCart(data));
  }
  const deleteProduct = () => {
    setProductData((prevState) => ({ ...prevState, isActive: false, counter: 0 }));
    serverDeleteProduct(data)
    dispatch(deleteCart(data));
  }

  if(productData.counter === 0 || !productData.isActive){
    return <></>
  }
  return (
    <div className={ style.productCart }>
      <img className={ style.image } src={ productData.image[0] } alt="img" />
      <div className={ style.info }>
        <div className={ style.name }> { productData.name } </div>
        <div className={ style.counterControl }>
          <button onClick={ () => decrementProduct() }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
          <div className={ style.counter }> { productData.counter } </div>
          <button onClick={ () => incrementProduct() }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
        </div>
        <span> { productData.cost } руб. </span>
      </div>
      <div className={ style.right }>
        <svg onClick={ () => deleteProduct() } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(253, 147, 57, 1)" className={ style.svg } viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
      </div>
    </div>
  )
}

export default BasketProductCart;
