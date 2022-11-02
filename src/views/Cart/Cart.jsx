import React from 'react';
import Banner from '../../components/Banner/Banner';
import CartView from '../../components/CartView/CartView';
import { useCartContext } from '../../context/CartContext';
import './cart.css';
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, totalPrice, clear} = useCartContext();
  return (
    <div>
      <Banner text='Mi Carrito' />
      <div className='cart'>
        {
          cart.length !== 0 
          ? <div className='cart-elements'>
              <div>
                <button onClick={() => clear()} className='clear'>Limpiar Carrito</button>
                {
                  cart.map((product) => <CartView key={product.id} product={product} /> )
                }
                
              </div>
              <div className='cart-order'>
                <h3>Resumen de compra:</h3>
                <div className='cart-order-text'>
                  <span>Subtotal:</span>
                  <span> {totalPrice()}</span>
                </div>
                <div className='cart-order-text'>
                  <span>Impuestos</span>
                  <span> + 21%</span>
                </div>
                <div className='cart-order-text'>
                  <span>TOTAL:</span>
                  <span> {totalPrice() * 0.21 + totalPrice()}</span>
                </div>
                <div className='cart-order-choice'>
                  <Link to='/checkout' className='cart-order-btn'>Ingresar y finalizar compra</Link>
                  <Link to='/' className='cart-back'>seguir comprando</Link></div>
              </div>
            </div>
          : 'carrito vacio'
        }
      </div>
    </div>
  )
}

export default Cart