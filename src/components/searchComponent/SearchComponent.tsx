import React from "react";
import style from "./style.module.scss";
import loupSvg from "../../assets/img/icons/search-loupe.svg";

const SearchComponent: React.FC = () => {
  return (
    <div className={ style.inputWrapper }> <img className={ style.img } src={ loupSvg } alt="" /> <input type="text" placeholder="Введите название товара или артикул" /> </div>
  )
}

export default SearchComponent;