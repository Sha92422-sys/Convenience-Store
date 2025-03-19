import React from "react";
import { Link } from "react-router-dom";

export default function PaymentPage({ setCart }) {
  return (
    <>
      <div className="container">
        <h2>Payment</h2>
        <input
          type="text"
          placeholder="Card Number"
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Expiry Date"
          className="form-control mb-2"
        />
        <input type="text" placeholder="Name" className="form-control mb-2" />
        <input
          type="text"
          placeholder="Address"
          className="form-control mb-2"
        />
        <Link
          to="/success"
          className="btn btn-success"
          onClick={() => setCart([])}
        >
          Submit Payment
        </Link>
      </div>
    </>
  );
}
