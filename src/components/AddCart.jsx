import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCart({ cart, setCart }) {
  return (
    <>
    <div className="container">
    <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.title} - ${item.price}</p>
        </div>
      ))}
      {cart.length > 0 && <Link to="/payment" className="btn btn-primary">Proceed to Payment</Link>}

    </div>
    
    </>
  )
}
