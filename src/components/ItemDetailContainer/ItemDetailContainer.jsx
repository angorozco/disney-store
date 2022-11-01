import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../utils/getItem';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {id} = useParams();
 
  useEffect(() => {
    setIsLoading(true);
    getItem(id).then((res) => setItem(res)).finally(() => setIsLoading(false));
  },[id])
  return (
    <div className='itemDetailContainer'>
      
      {
        isLoading 
        ? '...cargando producto'
        : <div>
            <Banner  text={item.category} />
            <ItemDetail item={item}/>
          </div>
      }
    </div>
  )
}

export default ItemDetailContainer