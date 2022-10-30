import React from 'react';
import './itemCount.css';

const ItemCount = ({sub, add, count, stock, onAdd}) => {
  
  return (
    <div className='itemCount'>
      <div className='counter'>
        <button onClick={sub} disabled={count === 1}>-</button>
        <span>{count}</span>
        <button onClick={add} disabled={count === stock}>+</button>
      </div>
      <button onClick={() => onAdd(count)} className='itemCount-btn'>ADD TO CART</button>
    </div>
  )
}

export default ItemCount