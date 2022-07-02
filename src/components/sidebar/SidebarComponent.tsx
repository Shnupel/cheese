import React from "react";
import CategoryComponent from "../categorysComponent/CategoryComponent";
import style from "./style.module.scss";

const SidebarComponent: React.FC = () => {
  const ingridients = ["Закваски для сыра", "Ферменты для сыра", "Хлористый кальций", "Плесень для сыра", "Кисломолочные закваски", "Красители для сыра", "Специи для сыра"]
  const equipment = ["Формы для сыра", "Латексное покрытие", "Воск для сыра", "Термоусадочные пакеты", "Дренажные коврики", "Дренажные мешки и салфетки для прессования", "Дренажные контейнеры"];
  return(
    <div className={ style.Sidebar }>
      <CategoryComponent type="ingridient" includes={ ingridients } /> 
      <CategoryComponent type="equipment" includes={ equipment } /> 
    </div>
  )
}

export default SidebarComponent;