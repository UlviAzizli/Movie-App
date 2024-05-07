import React from "react";
import { Link } from "react-router-dom";

const ContactInfoPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Information</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Email</h3>
          <p className="mb-0">ulviazizli96@gmail.com</p>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Phone</h3>
          <p className="mb-0">+1234567890</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>LinkedIn</h3>
          <p className="mb-0">
            <Link
              to="https://www.linkedin.com/in/ulvi-azizli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-reset "
            >
              Ulvi Azizli
            </Link>
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Address</h3>
          <p className="mb-0">Leipzig, Germany</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Business Hours</h3>
          <p className="mb-0">24/7</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPage;
