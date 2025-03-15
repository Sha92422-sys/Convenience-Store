import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="text-center">
      <h1>Welcome to Convenience Store</h1>
      <p>Your one-stop shop for amazing products.</p>
      <Link to="/products" className="btn btn-primary">Browse Products</Link>
    </div>
    </>
  )
}
