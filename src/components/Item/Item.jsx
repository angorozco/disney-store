import React from 'react';
import './item.css';
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <Link to={`/item/${product.id}`} className='card'>
      <img src={product.img} alt=""  className='card-img'/>
      <h2 className='card-title'>{product.name}</h2>
      <p className='card-price'>{product.price} $</p>
    </Link>
  )
}

export default Item