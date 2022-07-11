import React from "react";
import { useSelector } from "react-redux";
import { basketSliceSource } from "../../redux/slises/BasketSlice";
import style from "./style.module.scss";
import SearchComponent from "../searchComponent/SearchComponent";
import BasketForm from "./basketForm";
import logoSvg from "../../assets/img/icons/logo.svg";
import deliverySvg from "../../assets/img/icons/delivery.svg";
import creditCart from "../../assets/img/icons/credit-card-repeat.svg";
import userProtectionSvg from "../../assets/img/icons/user-protection-shield-square.svg";
import basketSvg from "../../assets/img/icons/shopping-cart.svg";
import arrowSvg from "../../assets/img/icons/arrows-diagrams-04.svg";

const NavComponent: React.FC = () => {
  const reduxBasket = useSelector(basketSliceSource);
  const [openedBasketForm, setOpenedBasketForm] = React.useState(false);
  const [costAllChoosedProduct, setCostAllChoosedProduct] = React.useState(0);
  const basketForm = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const removeAction = (event: MouseEvent) => {
      const _event = event as MouseEvent & { path: Node[] }
      if(basketForm.current && openedBasketForm && !_event.path.includes(basketForm.current)){
        console.log(_event.path, basketForm.current, openedBasketForm);
        setOpenedBasketForm(false);
      }
    }
    document.body.addEventListener("click", removeAction);
    return (() => document.body.removeEventListener("click", removeAction));
  }, []);
  React.useEffect(() => {
    setCostAllChoosedProduct(0);
    reduxBasket.forEach(obj => {
      setCostAllChoosedProduct(prevState => prevState + obj.cost * obj.counter);
    })
  }, [reduxBasket]);
  return(
    <>
      <div className={ style.info }>
        <div className={ style.item }>
          <img src={ logoSvg } alt="" />
          <div className={ style.logoText }>
            <span className={ style.boldText }>сыроварение</span>
            <span className={ style.finText }>оборудование и товары для сыроварения</span>
          </div>
        </div>
        <div className={ style.item }>
          <img src={ deliverySvg } alt="" />
          <span>Бесплатная доставка</span>
        </div>
        <div className={ style.item }>
          <img src={ creditCart } alt="" />
          <span>Скидка при оплате на сайте</span>
        </div>
        <div className={ style.item }>
          <img src={ userProtectionSvg } alt="" />
          <span>Защита покупателей</span>
        </div>
        <div className={ style.basket }>
          <div>
            <div onClick={ () => setOpenedBasketForm(prevState => !prevState) }> Ваша корзина </div>
            <div onClick={ () => setOpenedBasketForm(prevState => !prevState) } className={ style.orange }> { costAllChoosedProduct }Р </div>
            <div onClick={ () => setOpenedBasketForm(prevState => !prevState) } className={ style.basketCounter }> { reduxBasket.length } </div>
            { openedBasketForm && <div ref={ basketForm } className={ style.wrapedBasketComponent }><BasketForm /></div> }
          </div>
          <img onClick={ () => setOpenedBasketForm(prevState => !prevState) } src={ basketSvg } alt="" />
        </div>
      </div>
      <div className={ style.nav }>
        <div className={ style.content }>
          <div className={ style.item }>
            <span>Рецепты</span>
            <img src={ arrowSvg } alt="" />
          </div>
          <div className={ style.item }>Доставка и оплата</div>
          <div className={ style.item }>Калькулятор Сыродела</div>
          <div className={ style.item }>Отзывы</div>
          <div className={ style.item }>Вопросы и ответы</div>
          <div className={ style.item }>Контакты</div>
        </div>
        <SearchComponent />
      </div>
    </>
  )
}

export default NavComponent;