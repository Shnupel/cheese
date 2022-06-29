import React from "react";
import NavComponent from "../navComponent";
import style from "./styles.module.scss";
import arrowSource from "../../assets/img/icons/arrows-diagrams-041.svg";
import locationSvg from "../../assets/img/icons/interface-essential.svg";
import timeSvg from "../../assets/img/icons/alarm-clock-time-timer.svg";
import userSvg from "../../assets/img/icons/users-06.svg";

const HeaderComponent: React.FC = () =>{
  return (
    <>
      <div className={ style.top }>
        <div className={ style.left }>
          <div className={ style.info }> <img src={ locationSvg } alt=""/> <span>Ваш город: Москва</span> </div>
          <div className={ style.info }> <img src={ timeSvg } alt="" className={ style.time }/> <span>Пн-Пт 9:00 - 19:00</span> </div>
        </div>
        <div className={ style.about }>
          <div className={ style.info }> <span>О компании</span> </div>
          <div className={ style.info }> <span>Преимущества</span> </div>
          <div className={ style.info }> <span>Акционные товары</span> </div>
          <div className={ style.info }> <img src={ userSvg } alt="" /> <span>Войти в аккаунт</span> </div>
        </div>
      </div>
      <NavComponent />
      <div className={ style.source }>
        <div className={ style.sourseItem }>Главная</div>
        <img src={ arrowSource } className={ style.sourceImg } alt="/" />
        <div className={ style.sourseItem }>Ингредиенты</div>
        <img src={ arrowSource } className={ style.sourceImg } alt="/" />
        <div className={ style.sourseItem }>Кисломолочные закваски</div>
        <img src={ arrowSource } className={ style.sourceImg } alt="/" />
        <div className={ style.sourseItem }>Мезофильная закваска Hansen Flora Danica (50U)</div>
      </div>
    </>
  )
}

export default HeaderComponent;