import React from "react";
import style from "./style.module.scss";
import ingridientSvg from "../../assets/img/icons/cheese.svg";

const CategoryComponent: React.FC = () => {
  return(
    <div className={ style.categorys }>
      <div className={ style.title }> <img src={ ingridientSvg } alt="" /> <span>Ингридиенты</span> </div>
      <div className={ style.category }>Закваски для сыра</div>
      <div className={ style.category }>Ферменты для сыра</div>
      <div className={ style.category }>Хлористый кальций</div>
      <div className={ style.category }>Плесень для сыра</div>
      <div className={ style.category }>Кисломолочные закваски</div>
      <div className={ style.category }>Красители для сыра</div>
      <div className={ style.category }>Специи для сыра</div>
    </div>
  )
}

export default CategoryComponent;