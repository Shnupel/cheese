import React from 'react';
import style from "./style.module.scss";

const FiltrationComponent: React.FC = () => {
  return (
    <div>
      <div className={ style.filterItem }>
        <div className="bigText">Кисломолочные закваски</div>
        <button className={ style.button }>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14 14H16C16.552 14 17 14.448 17 15V19C17 19.552 16.552 20 16 20H14C13.448 20 13 19.552 13 19V15C13 14.448 13.448 14 14 14Z" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 17H17" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 17H3" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clipRule="evenodd" d="M10 10H8C7.448 10 7 9.552 7 9V5C7 4.448 7.448 4 8 4H10C10.552 4 11 4.448 11 5V9C11 9.552 10.552 10 10 10Z" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 7H7" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 7H21" stroke="#292929" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Фильтр</span>
        </button>
      </div>
      <div className={ style.filters }>
        <div className={ style.chooseFilters }>
          <div className={ style.chooseFilter }> <span>От дорогих к дешевым</span> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16675 14.6667L12.8334 11L9.16675 7.33334" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div className={ style.chooseFilter }> <span>Тип продукта</span> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16675 14.6667L12.8334 11L9.16675 7.33334" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div className={ style.chooseFilter }> <span>Производитель</span> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16675 14.6667L12.8334 11L9.16675 7.33334" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div className={ style.chooseFilter }> <span>Цена</span> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16675 14.6667L12.8334 11L9.16675 7.33334" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        {/* <div className={ style.watchedProducts }>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox" />
          <span>Показывать только товар в наличии</span>
        </div> */}
      </div>
      <div className={ style.choosedFilters }>
        <div className={ style.choosedSomeFilter }>
          <div className={ style.choosedFilter }> <span>Закваски для йогурта</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>
          <div className={ style.choosedFilter }> <span>Закваска для ряженки</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>
          <div className={ style.choosedFilter }> <span>От 159 руб. до 1500 руб.</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>
        </div>
        <span className={ style.cleanFilter }>Очистить фильтр</span>
      </div>
    </div>
  )
}

export default FiltrationComponent