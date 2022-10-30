import React, {useState, useEffect} from 'react';  
import ItemCount from '../ItemCount/ItemCount';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAdd = (count) => {
    console.log('cantidad: ', count);
  }


  useEffect(() => {
    setIsLoading(true);
    const productos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    })
    productos.then((res) => setProductsList(res)).finally(() => setIsLoading(false));
  },[])

  return (
    <div>
      
      {isLoading 
      ? '...cargando'
      :<ItemList products={productsList}/>}
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer