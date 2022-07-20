import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterState } from '../../redux/slises/FilterSlice';
import { addCart } from '../../redux/slises/BasketSlice';
import axios from "axios";
import { ICartProduct } from "../../types/types";
import style from "./styles.module.scss";
import cashSvg from "../../assets/img/icons/christmas-gift1.svg";
import usabilityBuysSvg from "../../assets/img/icons/credit-cards.3.svg";
import garantySvg from "../../assets/img/icons/social-medias-rewards-rating-10.svg";
import CartSlider from '../../components/cart/cartsComponentSlider/CartSlider';

const CartItem: React.FC = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [data, setData] = React.useState<ICartProduct>();
  const prodCategory = useSelector(filterState);
  React.useEffect(() => {
    axios.get(`https://62b717d3491a19c97aee79aa.mockapi.io/${ prodCategory.typeCategory.categoryPathName }?id=${ param.id }`)
    .then((responce) => responce.data)
    .then((result) => setData(result[0]))
  }, [param.id]);
  const increment = (data: ICartProduct) => {
    dispatch(addCart({...data, counter: 0}));
  }
  return (
    <div className={ style.item }>
      <div className={ style.title }> { data?.name } </div>
      <div className={ style.content }>
        <div className={ style.img }>
          <img src={ data?.image[0] } alt="" className={ style.fullImg } />
          <img src={ data?.image[0] } alt="" className={ style.slimImg } />
        </div>
        <div className={ style.buy }>
          <div className={ style.info }><svg width="8" height="8" fill="rgba(52, 177, 95, 1)" className="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg><span>В наличии</span></div>
          <div className={ style.cost }>
            <div>
              <span> { data?.cost } руб.</span>
              { data?.sale && <sup> { data?.cost + data?.sale } руб.</sup> }
            </div>
            <div className={ style.choosed }>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(253, 147, 57, 1)" className="bi bi-heart-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>
              <span>В избранное</span>
            </div>
          </div>
          <div className={ style.bonus }>
            <span className={ style.cost }>+95</span> <span>бонусных рублей</span>
          </div>
          <div className={ style.from }>
            <span className={ style.bold }>Артикул:</span> <span>23006</span>
          </div>
          <div className={ style.from }>
            <span className={ style.bold }>Производитель:</span> <span>Lactofarm ECO, Италия</span>
          </div>
          <div className={ style.controlCounter }>
            {/* <div className={ style.counter }>
              <button onClick={ () => data && decrement(data) } className={ style.operand }><svg width="22" height="22" fill="rgba(41, 41, 41, 1)" className="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
              <div className={ style.count }> { productCounter } </div>
              <button onClick={ () => data && increment(data) } className={ style.operand }><svg width="22" height="22" fill="rgba(41, 41, 41, 1)" className="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button>
            </div> */}
            <div onClick={ () => data && increment(data) } style={{ flex: "1 1 auto" }} className="button --orange">добавить в корзину</div>
          </div>
          <div className={ style.chooseArea }>
            <div className={ style.title }>Выберите регион для рассчета стоимости доставки:</div>
            <input type="text" className={ style.area } placeholder="Выберите регион" />
          </div>
          <div className={ style.benefits }>
            <div className={ style.benefit }> <img src={ cashSvg } alt="" /> <span>Возвращаем 10% бонусами</span> </div>
            <div className={ style.benefit }> <img src={ usabilityBuysSvg } alt="" /> <span>Удобные способы оплаты</span> </div>
            <div className={ style.benefit }> <img src={ garantySvg } alt="" /> <span>Гарантия качества</span> </div>
          </div>
        </div>
      </div>
      <div className="bigText">Аналогичные товары</div>
      <CartSlider type="analog" />
      <div className={ style.tabsWrapper }>
        <div className={ style.tabs }> 
          { data?.about && <div className={ style.tab }>Описание</div> }
          {/* <div className={ style.tab }>Доставка и оплата</div> */}
          { data?.userExperience && <div className={ style.tab }>Отзывы (3)</div> }
        </div>
        <div className={ style.tabsContent }>
          <div className={ style.tabContent }> { data?.about } </div>
        </div>
      </div>
      <div className="bigText">Похожие товары</div>
      <CartSlider type="normal" />
    </div>
  )
}

export default CartItem;