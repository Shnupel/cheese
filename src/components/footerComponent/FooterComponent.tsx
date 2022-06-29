import React from 'react'
import style from "./style.module.scss";
import logoSvg from "../../assets/img/icons/logo.svg";

const FooterComponent: React.FC = () => {
  return (
    <div className={ style.footer }>
      <div className="wrapper">
        <div className={ style.footerItem }>
          <div className={ style.item }>
            <div className={ style.content }>
              <img src={ logoSvg } className={ style.img } alt="" />
              <div className={ style.logoText }>
                <span className={ style.boldText }>сыроварение</span>
              </div>
            </div>
            <div className={ style.text }>Все материалы данного сайта являются объектами авторского права.</div>
          </div>
          <div className={ style.item }>
            <div className={ style.title }>Компания</div>
            <div className={ style.text }>О компании</div>
            <div className={ style.text }>Акции и скидки</div>
            <div className={ style.text }>Доставка и оплата</div>
            <div className={ style.text }>Отзывы</div>
            <div className={ style.text }>Гарантия и возврат</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent