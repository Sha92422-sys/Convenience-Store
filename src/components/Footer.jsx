import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex flex-column align-items-center">
        <div className="text-center mb-3">
          <h5>Contact Us</h5>
          <p className="mb-1">Email: info@conveniencestore.com</p>
          <p className="mb-1">Phone: +1 (555) 123-4567</p>
          <p className="mb-0">Location: 123 Main Street, Your City</p>
        </div>
        <p className="mt-3 mb-0">&copy; 2025 Convenience Store. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
}
