import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CartComponent from '../cartComponent/CartComponent';
import style from './style.module.scss';

const ListCartsComponent: React.FC = () => {
  const ourProducts = useSelector((state: RootState) => state.product.Products);
  return (
    <div className={style.wrapper}>
      {ourProducts.map((product, i) => (
        <CartComponent product={product} key={i} />
      ))}
    </div>
  );
};

export default ListCartsComponent;
