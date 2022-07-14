import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterState, addNewCategoryId, deleteOldCategoryId } from '../../redux/slises/FilterSlice';
import style from "./styles.module.scss";

const PopUpCategory: React.FC<{ data: { ingridient: string, i: number } }> = ({ data }) => {
  const dispatch = useDispatch();
  const filterReduxState = useSelector(filterState);
  const [showStockProd, setShowStockProd] = React.useState(filterReduxState.category.categoryId === String(data.i));
  const chooseCategory = (i: number) => {
    setShowStockProd(prevShow => !prevShow);
    if(!showStockProd){
      dispatch(addNewCategoryId(i));
    }else{
      dispatch(deleteOldCategoryId(i));
    }
  }
  return (
    <div className={ style.filter }>
      <input style={{ display: "none" }} id={ `checkboxId${data.i}` } type="checkbox" onClick={ () => chooseCategory(data.i) } />
      <label htmlFor={ `checkboxId${data.i}` } style={ showStockProd ? { background: "#FD9339" } : { background: "#fff" } } className={ style.checkbox } />
      <label htmlFor={ `checkboxId${data.i}` }><span className={ style.filterText }> { data.ingridient } </span></label>
    </div>
  )
}

export default PopUpCategory;