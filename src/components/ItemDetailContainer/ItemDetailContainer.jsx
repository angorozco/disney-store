import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../utils/getItem';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    getItem(id).then((res) => setItem(res));
  },[id])
  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer