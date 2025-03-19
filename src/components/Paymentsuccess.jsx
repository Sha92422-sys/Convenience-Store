import React from 'react';
import { Link } from 'react-router-dom';

export default function Paymentsuccess() {
  return (
    <>
    <div className="container">
    <h2>Order Placed Successfully!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
    </>
  )
}
