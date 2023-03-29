import React from 'react';
import "../../assets/scss/ourStyles.scss";
import FooterComponent from '../footerComponent/FooterComponent';
import HeaderComponent from "../headerComponent";
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.scss";

const WrapperComponent: React.FC = () => {
  return (
    <div className={ styles.l } >
      <div className="wrapper">
        <HeaderComponent />
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default WrapperComponent;

