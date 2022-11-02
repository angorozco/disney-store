import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc, query } from 'firebase/firestore'
import Banner from '../Banner/Banner'
import {Link} from 'react-router-dom'


const INITIAL_VALUE = {email: '', password: ''}

const Checkout = () => {
  const [buyer, setBuyer] = useState(INITIAL_VALUE);
  const [code, setCode] = useState('');

  const handleInput = (e) => {
    const {name, value} = e.target
    setBuyer({...buyer, [name]: value});
  }

  const {cart, totalPrice} = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer, items: cart.map(({name, quantity, price}) => ({name, quantity, price})), total: totalPrice()
    }

    const queryDB = getFirestore();
    const queryCollection = collection(queryDB, 'orders');
    addDoc(queryCollection, order).then((res) => setCode(res.id));
  }

  return (
    <div>
      <Banner text='Checkout'/>
      {
        code 
        ? <div>
            <p>Su compra fue realizada con éxito. Numero de orden ${code}</p>
            <Link to='/'>Regresar Home</Link>
          </div>
        : <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" id="" placeholder='email' onChange={handleInput}/>
            <input type="password" name="password" id="" placeholder='contraseña' onChange={handleInput}/>
            <button>ok</button>
         </form>
      }
      
    </div>
  )
}

export default Checkout