import React, { useState } from "react";
import "./App.css";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app">

      {/* Floating Created By */}
      <div className="created-by">
        Created by <span>Prachi Choudhary</span>
      </div>

      {/* Header */}
      <div className="header">
        🛒 ShopZone E-Commerce
      </div>

      {/* Navbar */}
      <nav>

        <div className="logo">ShopZone</div>

        <div
          className="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </div>

        <ul className={showMenu ? "show" : ""}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Deals</a></li>
          <li><a href="/">Categories</a></li>
          <li><a href="/">Account</a></li>
        </ul>

        <div className="icons">
          <a href="/">🛍 Cart (2)</a>
        </div>

      </nav>

      {/* Main Content */}
      <div className="container">

        <h2>🌟 Featured Products</h2>

        <div className="products">

          {/* Product 1 */}
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
              alt="Gaming Laptop"
            />

            <h3>💻 Gaming Laptop</h3>

            <p>$999</p>

            <button>Add to Cart</button>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
              alt="Smartphone"
            />

            <h3>📱 Smartphone</h3>

            <p>$699</p>

            <button className="green-btn">
              Add to Cart
            </button>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
              alt="Headphones"
            />

            <h3>🎧 Headphones</h3>

            <p>$199</p>

            <button className="red-btn">
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer>

        <div className="footer-section">

          <div>
            <b>📞 Contact Us</b>
            <br /><br />

            Email: info@shopzone.com
            <br />

            Phone: +1-234-567-890
          </div>

          <div>
            <b>ℹ️ Help</b>
            <br /><br />

            <a href="/">FAQ</a>
            <br />

            <a href="/">Return Policy</a>
          </div>

          <div>
            <b>🔗 Follow Us</b>
            <br /><br />

            <a href="/">Instagram</a>
            <br />

            <a href="/">Facebook</a>
          </div>

        </div>

      </footer>

      <div className="copy">
        © 2025 ShopZone — All Rights Reserved.
      </div>

    </div>
  );
}

export default App;