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

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">My Store</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Heading */}
      <h1 className="title">Latest Products</h1>

      {/* Products */}
      <div className="products">

        {/* Product 1 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
            alt="Gaming Laptop"
          />

          <h3>Gaming Laptop</h3>
          <p>$999</p>

          <button>Buy Now</button>
        </div>

        {/* Product 2 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt="Smartphone"
          />

          <h3>Smartphone</h3>
          <p>$699</p>

          <button>Buy Now</button>
        </div>

        {/* Product 3 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
            alt="Headphones"
          />

          <h3>Headphones</h3>
          <p>$199</p>

          <button>Buy Now</button>
        </div>

      </div>
    </div>
  );
}

export default App;