import React, {useState, useEffect} from 'react';  
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  const {gender} = useParams();
 


  useEffect(() => {
    setIsLoading(true);
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (gender) {
      
      const queryFilter = query(queryCollection, where('gender', '==', gender));
      getDocs(queryFilter).then((res) => setProductsList(res.docs.map((product)=> {
        return {id: product.id, ...product.data()}
      }))).finally(() => setIsLoading(false));
    }else{
  
      getDocs(queryCollection).then((res) => setProductsList(res.docs.map((product)=> {
        return {id: product.id, ...product.data()}
      }))).finally(() => setIsLoading(false));
    }
  }, [gender])
 

  return (
    <div>
      
      {isLoading 
      ? '...cargando'
      : <div>
          <Banner text={gender? gender : 'productos'} />
          <ItemList products={productsList}/>
        </div>
      }
      
    </div>
  )
}

export default ItemListContainer