import React from 'react';
import './cartView.css';
import { useCartContext } from '../../context/CartContext'

const CartView = ({product}) => {
  const {removeItem} = useCartContext();
  return (
    <div className='cartView'>
      <img src={product.img} alt="" className='cartView-img'/>
      <div className='cartView-info'>
        <h2>{product.name}</h2>
        <p>{product.price} $</p>
        <p>x {product.quantity} = {product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)} className='cartView-trash'><i className="bi bi-trash3"></i></button>
      </div>
    </div>
  )
}

export default CartView