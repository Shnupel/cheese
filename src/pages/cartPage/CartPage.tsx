import React from 'react';
import { useSelector } from 'react-redux';
import { loadingData, loadingStatus } from '../../redux/slises/ProductsSlise';
import style from "./styles.module.scss";
import "../../assets/scss/ourStyles.scss";
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import CartItem from './CartItem';

const CartPage: React.FC = () => {
  const loadStatus = useSelector(loadingData);
  React.useEffect(() => window.scrollTo({
    top: 0
  }), []);
  return (
    <>
      <div className={ style.interactiveContent }>
        <SidebarComponent />
        { loadStatus === loadingStatus.SUCCES && <CartItem /> }
      </div>
    </>
  )
}

export default CartPage;
