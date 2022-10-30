import React from 'react';
import './item.css';

const Item = ({product}) => {
  return (
    <a href='' className='card'>
      <img src={product.img} alt=""  className='card-img'/>
      <h2 className='card-title'>{product.name}</h2>
      <p className='card-price'>{product.price} $</p>
    </a>
  )
}

export default Item