import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="p-4 border rounded shadow-sm bg-light">
          <p>
            Welcome to <strong>Convenience Store</strong>, your friendly
            neighborhood convenience store! We are dedicated to providing a wide
            range of everyday essentials, snacks, beverages, groceries, and
            household products to serve our community better.
          </p>

          <h4 className="mt-4">Who We Are</h4>
          <p>
            At <strong>Convenience Store</strong>, we understand the importance
            of quick and easy access to daily necessities. Whether you need a
            last-minute grocery item, fresh snacks, or a refreshing drink, we
            are here to serve you with quality products at affordable prices.
          </p>

          <h4 className="mt-4">Our Mission</h4>
          <p>
            Our mission is to provide our customers with a{" "}
            <strong>fast, friendly, and convenient</strong>
            shopping experience. We strive to stock the best products, offer
            excellent customer service, and create a welcoming environment for
            everyone.
          </p>

          <h4 className="mt-4">What We Offer</h4>
          <ul>
            <li>Fresh Groceries & Dairy Products</li>
            <li>Snacks, Beverages & Frozen Foods</li>
            <li>Household Essentials & Personal Care Items</li>
            <li>Quick Checkout & Friendly Service</li>
            <li>24 hours Services</li>
          </ul>

          <h4 className="mt-4">Why Choose Us?</h4>
          <p>
            We are more than just a store – we are a part of the community. Our
            team works hard to ensure you have access to the best products,
            competitive pricing, and a hassle-free shopping experience.
          </p>

          <h4 className="mt-4">Visit Us Today!</h4>
          <p>
            Stop by <strong>Convenience Store</strong> for all your convenience
            needs. We look forward to serving you with a smile!
          </p>
        </div>

        {/* Contact Us Button */}
        <div className="mt-4">
          <Link to="/contact" className="btn btn-primary">
            Need Help? Contact Us
          </Link>
          <Link to="/" className="btn btn-primary mx-2">Go back to Home</Link>
          <Link className="btn btn-primary" to="/products ">Products</Link>
        </div>
      </div>
    </>
  );
}
