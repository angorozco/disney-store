import React, {useState} from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'


const ItemDetail = ({item}) => {
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const sub = () => setCount(count - 1);
  
  const add = () => setCount(count + 1);

  const {addItem} = useCartContext() ;

  const onAdd = (count) => {
    setIsInCart(true);
    addItem(item, count);
  }
  return (
    <div className='itemDetail'>
      <img src={item.img} alt="" className='itemDetail-pic'/>
      <div className='itemDetail-info'>
        <h2 className='itemDetail-name'>{item.name}</h2>
        <p className='itemDetail-descrip'>{item.description}</p>
        <p className='itemDetail-price'>precio: <span>{item.price} $</span></p>
        <ItemCount stock={5} onAdd={onAdd} count={count} add={add} sub={sub}/>
        {isInCart && 
          <div>
            <Link to='/'>seguir comprando</Link>
            <Link to='/cart'>ir al carrito</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default ItemDetail