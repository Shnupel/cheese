import React from "react";
import CategoryComponent from "../categorysComponent/CategoryComponent";
import style from "./style.module.scss";

const SidebarComponent: React.FC = () => {
  return(
    <div className={ style.Sidebar }>
      <CategoryComponent /> 
      <CategoryComponent /> 
    </div>
  )
}

export default SidebarComponent;