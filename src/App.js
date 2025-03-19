import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import AddCart from "./components/AddCart";
import PaymentPage from "./components/PaymentPage";
import Paymentsuccess from "./components/Paymentsuccess";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <div className="container mt-4">
          <img
            src="https://images.pexels.com/photos/19072522/pexels-photo-19072522.jpeg"
            alt="Store"
            className="img-fluid w-100 mb-4"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProductList products={products} setCart={setCart} />} />
          <Route path="/products" element={<ProductList products={products} setCart={setCart} />} />
          <Route path="/products/:id" element={<ProductDetails setCart={setCart} />} />
          <Route path="/cart" element={<AddCart cart={cart} setCart={setCart} />} />
          <Route path="/payment" element={<PaymentPage setCart={setCart} />} />
          <Route path="/success" element={<Paymentsuccess />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
