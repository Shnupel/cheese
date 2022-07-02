import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterState, addCategory } from "../../redux/slises/FilterSlice";
import style from "./style.module.scss";
import ingridientSvg from "../../assets/img/icons/cheese.svg";
import equipmentSvg from "../../assets/img/icons/cereal-bowl.svg";

const CategoryComponent: React.FC<{ type: string, includes: string[] }> = ({ type, includes }) => {
  const titleImg = type === "ingridient" ? ingridientSvg : equipmentSvg;
  const dispatch = useDispatch();
  const categoryRedux = useSelector(filterState);
  const chooseCategory = (category: string, i: number) => {
    //choose category
    const categorys = {
      category: {
        categoryName: category, //choose category for view source
        categoryId: `${i}` //choose category for request to DB
      },
      typeCategory: {
        categoryName: type === "ingridient" ? "Ингридиенты" : "Оборудование", //choose category for view source
        categoryPathName: type === "ingridient" ? "prod" : "equipment" //choose category for request to DB
      }
    }
    if(categoryRedux.category.categoryId !== categorys.category.categoryId || categoryRedux.typeCategory.categoryName !== categorys.typeCategory.categoryName){
      dispatch(addCategory(categorys));
    }
  }
  return(
    <div className={ style.categorys }>
      <div className={ style.title }> <img src={ titleImg } alt="" /> <span>Ингридиенты</span> </div>
      {
        includes.map((include, i) => <Link to="/categoryPage" key={ i } className={ style.href }><div onClick={ () => chooseCategory(include, i) } className={ style.category }> { include } </div></Link>)
      }
    </div>
  )
}

export default CategoryComponent;