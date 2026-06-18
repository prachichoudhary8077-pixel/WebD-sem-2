// App.js

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Floating Background Shapes */}
      <div className="floating floating1"></div>
      <div className="floating floating2"></div>
      <div className="floating floating3"></div>

      {/* Header */}
      <header className="header">
        <h1>TechStore</h1>
        <h2>Premium Electronics & Gadgets</h2>
      </header>

      {/* Main Container */}
      <div className="container">
        <div className="product-section">
          
          {/* Product Image */}
          <div className="product-image">
            <img
              src="https://images.unsplash.com/photo-1637496652486-99d500bcdd18?auto=format&fit=crop&q=80&w=1740"
              alt="iPhone 13 Pro"
            />
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h2 className="product-title">iPhone 13 Pro</h2>

            <p className="product-description">
              Experience the ultimate in smartphone technology with the Apple
              iPhone 13 Pro. Featuring the powerful A15 Bionic chip,
              professional-grade camera system, and stunning Super Retina XDR
              display for unmatched performance and visual excellence.
            </p>

            <div className="product-price">
              <span className="price-label">Special Price: </span>
              ₹1,19,900
            </div>

            <div className="btn-container">
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="details-section">
          <h3 className="details-title">Product Specifications</h3>

          <div className="specification-grid">
            <div className="spec-item">
              <h4>Display</h4>
              <p>6.1-inch Super Retina XDR OLED Display</p>
            </div>

            <div className="spec-item">
              <h4>Camera</h4>
              <p>12MP Triple Camera System with ProRAW</p>
            </div>

            <div className="spec-item">
              <h4>Processor</h4>
              <p>A15 Bionic Chip with 6-Core CPU</p>
            </div>

            <div className="spec-item">
              <h4>Storage</h4>
              <p>128GB Internal Storage</p>
            </div>

            <div className="spec-item">
              <h4>Battery</h4>
              <p>Up to 22 Hours Talk Time</p>
            </div>

            <div className="spec-item">
              <h4>Connectivity</h4>
              <p>5G Ready with Wi-Fi 6 Support</p>
            </div>
          </div>

          <ul className="details-list">
            <li>
              <strong>Display Technology:</strong> 6.1-inch Super Retina XDR
              OLED with ProMotion technology
            </li>

            <li>
              <strong>Camera System:</strong> 12MP triple camera system with
              Ultra Wide, Wide, and Telephoto lenses
            </li>

            <li>
              <strong>Performance:</strong> A15 Bionic chip with 6-core CPU and
              5-core GPU
            </li>

            <li>
              <strong>Storage Capacity:</strong> 128GB internal storage
            </li>

            <li>
              <strong>Battery Life:</strong> Up to 22 hours talk time
            </li>

            <li>
              <strong>Build Quality:</strong> Aerospace-grade aluminum frame
            </li>

            <li>
              <strong>Water Resistance:</strong> IP68 water resistance rating
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="footer">
          Created by <span>Prachi Choudhary</span>
        </footer>
      </div>
    </div>
  );
}

export default App;