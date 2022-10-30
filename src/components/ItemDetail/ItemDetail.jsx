import React, {useState} from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {
  const [count, setCount] = useState(1);

  const sub = () => setCount(count - 1);
  
  const add = () => setCount(count + 1);

  const onAdd = (count) => {
    console.log('cantidad: ', count);
  }
  return (
    <div className='itemDetail'>
      <img src={item.img} alt="" className='itemDetail-pic'/>
      <div className='itemDetail-info'>
        <h2 className='itemDetail-name'>{item.name}</h2>
        <p className='itemDetail-descrip'>{item.description}</p>
        <p className='itemDetail-price'>precio: <span>{item.price} $</span></p>
        <ItemCount stock={5} onAdd={onAdd} count={count} add={add} sub={sub}/>
      </div>
    </div>
  )
}

export default ItemDetail