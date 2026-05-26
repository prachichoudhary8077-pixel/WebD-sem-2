import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Floating Name */}
      <div className="created-by">
        Created by <span>Prachi Choudhary</span>
      </div>

      {/* Header */}
      <header>
        <h1>Navigation Demo</h1>
      </header>

      {/* Navigation */}
      <nav>

        {/* Block Link */}
        <a href="/" className="block-link">
          Block Link (display:block)
        </a>

        {/* Inline Links */}
        <ul className="inline">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        {/* Inline Block */}
        <ul className="inline-block">
          <li><a href="/">Shop</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>

      </nav>

      {/* Sidebar */}
      <div className="sidebar">

        <h3>Sidebar</h3>

        <p>
          Floating sidebar stays to the left
          of the main area.
        </p>

      </div>

      {/* Main Content */}
      <div className="main">

        <h2>Main Content</h2>

        <p>
          This area represents the primary content.
          The sidebar uses float:left.
          The footer below uses clear:both.
        </p>

        <h3>Visual Examples</h3>

        <div className="example block">
          Block element: a div or p occupies full available width.
        </div>

        <span className="example inline-example">
          Inline element: a span flows inside a line
        </span>

        <div className="example inline-block-example">
          Inline-block: box that flows inline
          but accepts width/height
        </div>

        <p className="last-text">
          Resize the window or view on mobile
          to see responsive behavior.
        </p>

      </div>

      {/* Footer */}
      <footer>
        © 2025 Navigation Demo | Designed by Prachi Choudhary
      </footer>

    </div>
  );
}

export default App;