import React from 'react';
import HeaderComponent from '../../components/headerComponent';
import style from "./styles.module.scss";
import "../../assets/scss/ourStyles.scss";
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import CartItem from './CartItem';
import FooterComponent from '../../components/footerComponent/FooterComponent';

const CartPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <HeaderComponent />
        <div className={ style.interactiveContent }>
          <SidebarComponent />
          <CartItem />
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default CartPage;