import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { initialCategorys, filterState, addCategory } from "../../redux/slises/FilterSlice";
import NavComponent from "./navComponent";
import style from "./styles.module.scss";
import arrowSource from "../../assets/img/icons/arrows-diagrams-041.svg";
import locationSvg from "../../assets/img/icons/interface-essential.svg";
import timeSvg from "../../assets/img/icons/alarm-clock-time-timer.svg";
import userSvg from "../../assets/img/icons/users-06.svg";
import { CheckIsLogin } from "./service";

const HeaderComponent: React.FC = () =>{
  const [userData, setUserData] = useState({ isAuth: false });
  const counter = useRef(0);
  useEffect(() => {
    if(counter.current < 3){
      setUserData(() => CheckIsLogin());
      counter.current++;
    }else{
      counter.current = 0;
    }
  })

  const dispatch = useDispatch();
  const filter = useSelector(filterState);
  const location = useLocation();
  const dispatchCategory = (typeCategory: { categoryName: string, categoryPathName: string }) => {
    const initialCategory: typeof initialCategorys.categorys = { ...initialCategorys.categorys, typeCategory };
    dispatch(addCategory(initialCategory));
  }
  return (
    <div className={ style.header }>
      <div className={ style.top }>
        <div className={ style.left }>
          <div className={ style.info }> <img src={ locationSvg } alt=""/> <span>Ваш город: Уфа</span> </div>
          <div className={ style.info }> <img src={ timeSvg } alt="" className={ style.time }/> <span>Пн-Пт 9:00 - 19:00</span> </div>
        </div>
        <div className={ style.about }>
          <div className={ style.info }> <span>О компании</span> </div>
          <div className={ style.info }> <span>Преимущества</span> </div>
          <div className={ style.info }> <span>Акционные товары</span> </div>
          <div className={ style.info }> <img src={ userSvg } alt="" />
            { !userData.isAuth ? (<span> <Link className={ style.link } to={ "/auth" }>Войти в аккаунт</Link> </span>) : <span> { CheckIsLogin().userData.email }  </span> }
          </div>
        </div>
      </div>
      <NavComponent />
      {
        location.pathname !== "/" && (
          <div className={ style.source }>
            <Link className={ style.sourceHref } onClick={ () => dispatchCategory(initialCategorys.categorys.typeCategory) } to="/"><div className={ style.sourseItem }>Главная</div></Link>
            <img src={ arrowSource } className={ style.sourceImg } alt="/" />
            <Link className={ style.sourceHref } onClick={ () => dispatchCategory(filter.typeCategory) } to="/categoryPage"><div className={ style.sourseItem }> { filter.typeCategory.categoryName } </div></Link>
            <img src={ arrowSource } className={ style.sourceImg } alt="/" />
            <div className={ style.sourseItem }> { filter.category.categoryName } </div>
          </div>
        )
      }
    </div>
  )
}

export default HeaderComponent;
