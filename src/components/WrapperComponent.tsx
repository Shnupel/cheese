import React from 'react';
import "../assets/scss/ourStyles.scss";
import FooterComponent from './footerComponent/FooterComponent';
import HeaderComponent from './headerComponent';
import { Outlet, OutletProps } from 'react-router-dom';

const WrapperComponent: React.FC = () => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default WrapperComponent;