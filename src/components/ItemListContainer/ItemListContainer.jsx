import React, {useState, useEffect} from 'react';  
import ItemCount from '../ItemCount/ItemCount';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAdd = (count) => {
    console.log('cantidad: ', count);
  }

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
      :<ItemList products={productsList}/>}
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer