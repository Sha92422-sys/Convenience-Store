import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails({setCart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, product]);
  };

    return (
    <>
    <div className="card">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>Price:</strong> ${product.price}</p>
        <Link to="/cart" className="btn btn-primary mx-2" onClick={handleAddToCart}>Add to Cart</Link>
      </div>
    </div>
    </>
  )
}
