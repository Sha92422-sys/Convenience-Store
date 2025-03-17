import React  from "react";
import {Link} from 'react-router-dom'

export default function Contacts() {
  
  return (
   <>
   <div className="container mt-4">
      <h2 className="text-center mb-4">Register and we will reach out to you</h2>
      <div className="p-4 border rounded shadow-sm bg-light" >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" placeholder="Enter your mobile number" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" rows="3" placeholder="Enter your address"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Preferences</label>
          <select className="form-select">
            <option>Select Preference</option>
            <option>Email</option>
            <option>Phone Call</option>
            <option>WhatsApp</option>
          </select>
        </div>
        
        <button className="btn btn-primary w-10" disabled>Submit</button>
      </div>
      <Link to="/" className="btn btn-primary my-2">Go back to Home</Link>
    </div>
   </>
  );
}
