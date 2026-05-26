import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Floating Background */}
      <div className="floating floating1"></div>
      <div className="floating floating2"></div>
      <div className="floating floating3"></div>

      {/* Created By */}
      <div className="footer">
        Created by <span>Prachi Choudhary</span>
      </div>

      {/* Student Card */}
      <div className="card">

        {/* Avatar */}
        <div className="avatar">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
            alt="Student Avatar"
          />
        </div>

        {/* Info */}
        <div className="info">

          <div className="name-row">
            <div>
              <h2>Jane Smith</h2>
              <div className="meta">
                B.Sc. Computer Science • Year 2 • 19 years
              </div>
            </div>

            <div className="actions">
              <button className="btn">Message</button>
              <button className="btn secondary">Follow</button>
            </div>
          </div>

          <div className="details">
            <div>
              <strong>Email:</strong> jane.smith@example.edu
            </div>

            <div>
              <strong>Location:</strong> Mumbai, India
            </div>

            <div>
              <strong>GPA:</strong> 9.1 / 10
            </div>
          </div>

          <div>
            <div className="skill-title">Skills</div>

            <div className="skills">
              <span className="pill">HTML</span>
              <span className="pill">CSS</span>
              <span className="pill">JavaScript</span>
              <span className="pill">Python</span>
              <span className="pill">React</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;