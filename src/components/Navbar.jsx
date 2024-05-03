import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/favorites">My favs</Link>
          <Link to="/">Home</Link>
        </span>
      </div>
    </nav>
  );
}
