// App.js

import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    pickupAddress: "",
    pinNumber: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="Form">
        <div className="nameinfo">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />{" "}
          {/* <br></br> */}
          {/* <label htmlFor="mobileNumber">last name</label><br /> */}
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Last name"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="streetaddress">
          <input
            type="text"
            id="pinNumber"
            placeholder="Street addess"
            name="pinNumber"
            value={formData.pinNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="streetaddress">
          <input
            type="text"
            id="state"
            name="state"
            placeholder="landmark"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="info">
          <input
            type="text"
            id="country"
            name="country"
            placeholder="City"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <select name="state" id="select">
            <option value="">State</option>
            <option value="">Delhi</option>
            <option value="">Bihar</option>
          </select>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="PIN code"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
