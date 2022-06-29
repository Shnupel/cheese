import React from 'react'
import HeaderComponent from '../../components/headerComponent';
import style from "./style.module.scss";
import "../../assets/scss/ourStyles.scss";
import FooterComponent from '../../components/footerComponent/FooterComponent';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import ListCartsComponent from '../../components/cart/cartsComponentBlocks/CartsComponent';
import FiltrationComponent from '../../components/fitrationComponent/FiltrationComponent';

const CategoryPage = () => {
  return (
    <div className='wrapper'>
      <HeaderComponent />
      <div className={ style.interactiveContent }>
        <SidebarComponent />
        <div className="content">
          <FiltrationComponent />
          <ListCartsComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default CategoryPage;