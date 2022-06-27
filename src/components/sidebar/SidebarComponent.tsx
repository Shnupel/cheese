import React from "react";
import CategoryComponent from "../categorysComponent/CategoryComponent";

const SidebarComponent: React.FC = () => {
  return(
    <div>
      <CategoryComponent /> 
      <CategoryComponent /> 
    </div>
  )
}

export default SidebarComponent;