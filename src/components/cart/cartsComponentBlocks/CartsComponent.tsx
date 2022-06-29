import React from 'react';
import CartComponent from '../cartComponent/CartComponent';
import style from "./style.module.scss";
const ListCartsComponent: React.FC = () => {
  return (
    <div className={ style.wrapper }>
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CartComponent />
    </div>
  )
}

export default ListCartsComponent;