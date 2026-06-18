import React, { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomType: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    alert("🏨 Room Booked Successfully!");
  };

  return (
    <div className="main-container">

      {/* Floating Creator Tag */}
      <div className="creator-tag">
        Created By: <span>Prachi Choudhary</span>
      </div>

      <div className="form-container">

        <h2>🏨 Hotel Room Booking Form</h2>

        <p className="subtitle">
          Book your dream room easily
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Room Type</label>

            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Room --</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Deluxe Room</option>
              <option>Luxury Suite</option>
            </select>
          </div>

          <div className="input-group">
            <label>Number of Guests</label>

            <input
              type="number"
              name="guests"
              placeholder="Enter guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Check In Date</label>

            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Check Out Date</label>

            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Address</label>

            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="button-group">

            <button type="submit" className="btn-book">
              Book Room
            </button>

            <button type="reset" className="btn-reset">
              Reset
            </button>

          </div>

        </form>

        {/* Success Card */}
        {submittedData && (
          <div className="success-card">

            <h3>✅ Booking Confirmed</h3>

            <p>
              <strong>Name:</strong> {submittedData.fullName}
            </p>

            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>

            <p>
              <strong>Phone:</strong> {submittedData.phone}
            </p>

            <p>
              <strong>Room:</strong> {submittedData.roomType}
            </p>

            <p>
              <strong>Guests:</strong> {submittedData.guests}
            </p>

            <p>
              <strong>Check In:</strong> {submittedData.checkIn}
            </p>

            <p>
              <strong>Check Out:</strong> {submittedData.checkOut}
            </p>

            <p>
              <strong>Address:</strong> {submittedData.address}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;