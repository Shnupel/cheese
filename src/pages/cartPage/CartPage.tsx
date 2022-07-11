import React from 'react';
import style from "./styles.module.scss";
import "../../assets/scss/ourStyles.scss";
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import CartItem from './CartItem';

const CartPage: React.FC = () => {
  React.useEffect(() => window.scrollTo({
    top: 0
  }), []);

  return (
    <>
      <div className={ style.interactiveContent }>
        <SidebarComponent />
        <CartItem />
      </div>
    </>
  )
}

export default CartPage;