import React from "react";
import { useSelector } from "react-redux";
import { loadingStatus, loadingData } from "../../redux/slises/ProductsSlise";
import style from "./styles.module.scss";
import "../../assets/scss/ourStyles.scss";
import SidebarComponent from "../../components/sidebar/SidebarComponent";
import readMorreArrowSvg from "../../assets/img/icons/arrows-diagrams-043.svg";
import ListCartsComponent from "../../components/cart/cartsComponentBlocks/CartsComponent";
import CartSlider from "../../components/cart/cartsComponentSlider/CartSlider";

const HomePage: React.FC = () => {
  const loadStatus = useSelector(loadingData);
  return(
    <>
      <div className={ style.carts }>
        <div className={ style.bigCart }>
          <div className={ style.title }>Наборы для сыроделия</div>
          <div className={ style.subTitle }>Все что вам нужно для приготовления сыра в домашних условиях</div>
          <div className="button --orange">Смотреть наборы</div>
        </div>
        <div className={ style.smallCartFirst }>
          <div className={ style.subTitle }>Рецепты</div>
          <div className={ style.title }>Сыры с плесенью</div>
        </div>
        <div className={ style.smallCartSecond }>
          <div className={ style.subTitle }>Акции</div>
          <div className={ style.title }>закваски для сыра</div>
        </div>
      </div>
      <div className={ style.interactiveContent }>
        <SidebarComponent />
        <div className={ style.content }>
          <div className={ style.categorys }>
            <span> Популярные товары </span>
            <span> Акции </span>
          </div>
          <div className="bigText">Ингредиенты</div>
          { loadingStatus.SUCCES === loadStatus && <ListCartsComponent /> }
        </div>
      </div>
      <div className={ style.banners }>
        <div className={ style.bannerFisrt }>
          <div className={ style.title }>более 1000 <br /> лучших рецептов</div>
          <div className={ style.subTitle }>Мы собрали для Вас большую <br /> базу рецептов.</div>
          <div className="button --orange">Перейти</div>
        </div>
        <div className={ style.bannerSecond }>
          <div className={ style.title }>крутые Наборы <br /> для сыра</div>
          <div className={ style.subTitle }>Готовые наборы сэкономятвремя <br /> время, мы всё сделали за Вас. </div>
          <div className="button --orange">Перейти</div>
        </div>
      </div>
      <div className="bigText">наше оборудование</div>
      <div className={ style.equipment }>
        <div className="bigText">Прессы для сыра</div>
        <div className={ style.subTitle }>Пресс можно использовать для прессования твердых сыров. Он разбирается, и вы можете компактноего упаковать в коробку.</div>
        <div className="button --orange">Узнать больше</div>
      </div>
      <div className={ style.staties }>
        <div className={ style.big }>
          <div className="bigText">Статьи <br /> про сыроделие</div>
          <div className={ style.subTitle }>Мы собрали самые интересные  и полезные новости о акциях, скидках и мире сыроделия.</div>
          <div className={ style.buttonWrapper }><div className="button --orange">Читать все статьи</div></div>
        </div>
        <div className={ style.carts }>
          <div className={ style.cart }>
            <img src="../../assets/img/image/Rectangle6.jpg" alt="" />
            <div className={ style.content }>
              <div className={ style.title }>Сырная тарелка</div>
              <div className={ style.subTitle }>Так называется блюдо, которое состоит из разных сортов сыра. </div>
              <div className={ style.readMore }> <span>Читать далее</span> <img src={ readMorreArrowSvg } alt="" /> </div>
            </div>
          </div>
          <div className={ style.cart }>
            <img src="../../assets/img/image/Rectangle6.jpg" alt="" />
            <div className={ style.content }>
              <div className={ style.title }>Сырная тарелка</div>
              <div className={ style.subTitle }>Так называется блюдо, которое состоит из разных сортов сыра. </div>
              <div className={ style.readMore }> <span>Читать далее</span> <img src={ readMorreArrowSvg } alt="" /> </div>
            </div>
          </div>
          <div className={ style.cart }>
            <img src="../../assets/img/image/Rectangle6.jpg" alt="" />
            <div className={ style.content }>
              <div className={ style.title }>Сырная тарелка</div>
              <div className={ style.subTitle }>Так называется блюдо, которое состоит из разных сортов сыра. </div>
              <div className={ style.readMore }> <span>Читать далее</span> <img src={ readMorreArrowSvg } alt="" /> </div>
            </div>
          </div>
          <div className={ style.cart }>
            <img src="../../assets/img/image/Rectangle6.jpg" alt="" />
            <div className={ style.content }>
              <div className={ style.title }>Сырная тарелка</div>
              <div className={ style.subTitle }>Так называется блюдо, которое состоит из разных сортов сыра. </div>
              <div className={ style.readMore }> <span>Читать далее</span> <img src={ readMorreArrowSvg } alt="" /> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bigText">Просмотренные товары</div>
      <CartSlider type="normal" />
    </>
  )
}

export default HomePage;