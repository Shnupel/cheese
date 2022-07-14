import React from 'react';
import { ingridients, equipment } from '../sidebar/SidebarComponent';
import PopUpCategory from './PopUpCategory';
import style from "./styles.module.scss";

const PopUpCategorys: React.FC = () => {
  return (
    <div className={ style.categoryPopup }>
      <div className={ style.title }>Выберите фильтр</div>
      {
        ingridients.map((ingridient, i) => <PopUpCategory key={ i } data={{ ingridient, i }} />)
      }
      {/* <button className={ style.button }>Применить</button> */}
    </div>
  )
}

export default PopUpCategorys;