import React, {useState} from 'react';
import './itemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  const sub = () => setCount(count - 1);
  
  const add = () => setCount(count + 1);
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