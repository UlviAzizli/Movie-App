import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-secondary text-light">
      <div className="container text-center">
        <span className="text-muted">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white">Movie App</span>{" "}
          <Link
            to="https://www.linkedin.com/in/ulvi-azizli/"
            target="_blank"
            className="ms-2 me-2 text-decoration-none"
            style={{ color: "white" }}
          >
            LinkedIn
          </Link>{" "}
          <Link
            to="mailto:ulviazizli96@gmail.com"
            target="_blank"
            className="ms-2 text-decoration-none"
            style={{ color: "white" }}
          >
            ulviazizli96@gmail.com
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
