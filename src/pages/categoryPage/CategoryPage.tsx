import React from 'react';
import { useSelector } from 'react-redux';
import { loadingStatus, loadingData } from '../../redux/slises/ProductsSlise';
import style from "./style.module.scss";
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ListCartsComponent from '../../components/cart/cartsComponentBlocks/CartsComponent';
import FiltrationComponent from '../../components/fitrationComponent/FiltrationComponent';

const CategoryPage = () => {
  const loadStatus = useSelector(loadingData);
  return (
    <div className={ style.interactiveContent }>
      <SidebarComponent />
      <div className={ style.content }>
        <FiltrationComponent />
        { loadStatus === loadingStatus.SUCCES && <ListCartsComponent /> }
      </div>
    </div>
  )
}

export default CategoryPage;