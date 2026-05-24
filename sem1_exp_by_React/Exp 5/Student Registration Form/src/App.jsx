import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="form-container">
        <h2>🎓 Student Registration Form</h2>
        <p className="subtitle">Fill your details carefully</p>

        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter valid email" />
          </div>

          <div className="input-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>

              <label>
                <input type="radio" name="gender" /> Female
              </label>

              <label>
                <input type="radio" name="gender" /> Other
              </label>
            </div>
          </div>

          <div className="input-group">
            <label>Select Course</label>

            <select>
              <option>-- Select Course --</option>
              <option>BCA</option>
              <option>B.Tech</option>
              <option>BBA</option>
              <option>MCA</option>
              <option>MBA</option>
            </select>
          </div>

          <div className="input-group">
            <label>Address</label>
            <textarea placeholder="Enter your address"></textarea>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-register">
              Register
            </button>

            <button type="reset" className="btn-reset">
              Reset
            </button>
          </div>
        </form>

        
      </div>
      <div className="creator-tag">
  ✨ Created by <span>Prachi Choudhary</span>
</div>
    </div>
  );
}

export default App;