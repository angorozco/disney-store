import React, {useState, useEffect} from 'react';  
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner';

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  const {gender} = useParams();
  console.log(gender)

  useEffect(() => {
    setIsLoading(true);
    const productos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    })
    productos.then((res) => {
      if (gender) {
        setProductsList(res.filter((product) => product.gender === gender))
      }else{
        setProductsList(res);
      }
    }).finally(() => setIsLoading(false))
  },[gender]);

 

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