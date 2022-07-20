import React from "react";
import CategoryComponent from "../categorysComponent/CategoryComponent";
import style from "./style.module.scss";

export const ingridients = ["Закваски для сыра", "Ферменты для сыра", "Плесень для сыра", "Специи для сыра", "Красители для сыра"]
export const equipment = ["Формы для сыра", "Воск для сыра", "Дренажные коврики"];

const SidebarComponent: React.FC = () => {
  return(
    <div className={ style.Sidebar }>
      <CategoryComponent type="ingridient" includes={ ingridients } /> 
      <CategoryComponent type="equipment" includes={ equipment } /> 
    </div>
  )
}

export default SidebarComponent;