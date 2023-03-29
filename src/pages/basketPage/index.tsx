import React, { useCallback, useEffect, useState } from 'react';
import style from "./style.module.scss";
import "../../assets/scss/ourStyles.scss";
import BasketProductCart from "./product";
import { ICartProduct } from "../../types/CartType";
import { Link, useNavigate } from "react-router-dom";
import UserSessionStorage from "../../storages/SessionStorage";
import UserAuth from "../../controllers/auth";
import { useDispatch } from "react-redux";
import { addCart, deleteAllCart } from "../../redux/slises/BasketSlice";

const data: ICartProduct = {
  id: 2,
  name: "Термофильная закваска Hansen YF-L 812 (50U)",
  image: [
    "https://syrolavka.ru/wp-content/uploads/2022/05/yf812.png",
    "https://syrolavka.ru/wp-content/uploads/2022/05/yf_st.png"
  ],
  cost: 840,
  sale: 0,
  category: 0,
  about: "Закваска YF-L 812 (50U) от Hansen – культура, которая используется в производстве молочных продуктов, в том числе йогурта и сыра с высокими температурами второго нагрева. Наличие болгарской палочки в ее составе позволяет получать плотный, некислый йогурт с равномерной текстурой. Используя такой порошковый концентрат, можно получать как питьевой, так и густой йогурт. Используют состав и для приготовления сыров, приготовление которых предусматривает высокую температуру второго нагревания, а также сортов группы Паста Филата.",
  includes: "Lactobacillus delbrueckii subsp bulgaricus, Streptococcus thermophilus.",
  counter: 0
}

const BasketPage: React.FC = () => {
  const [userData, setUserData] = useState({ result: { data: { products: [] } } });
  const dispatch = useDispatch();
  useEffect(() => {
    if(UserSessionStorage.haveUserSession() !== ""){
      UserAuth(UserSessionStorage.haveUserSession().email, UserSessionStorage.haveUserSession().password)
        //@ts-ignore
        .then(data => setUserData(data))
    }
  }, []);
  useEffect(() => {
    dispatch(deleteAllCart());
    if(userData?.result?.data?.products){
      userData.result.data.products.forEach((product: ICartProduct) => {
        for(let i = 0; i < product.counter; i++){
          dispatch(addCart(product));
        }
      });
    }
  }, [userData]);

  if(userData?.result?.data?.products?.length === 0){
    return (
      <div className={ style.wrapper }>
        <div className="bigText">вы ничего не положили в корзину(</div>
        <Link className={ style.backBtn } to={ "/" }>вернуться на главную страницу</Link>
      </div>
    )
  }
  return (
    <div className={ style.wrapper }>
      <div className="bigText">Оформление заказа</div>
      <div className={ style.carts }>
        { userData?.result?.data?.products?.map((data, i) => <div key={ i }><BasketProductCart data={ data } /></div>) }
      </div>
    </div>
  )
}

export default BasketPage;
