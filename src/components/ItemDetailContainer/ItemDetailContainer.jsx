import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Banner from '../Banner/Banner';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {id} = useParams();
 
  useEffect(() => {
    setIsLoading(true);
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', id);
    getDoc(queryDoc).then(res => setItem({id: res.id, ...res.data()})).finally(() => setIsLoading(false));
  },[id]);

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