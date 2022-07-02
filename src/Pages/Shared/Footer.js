import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footers">
      <h2>Todo App</h2>
      <div>
        <p>Connect With</p>
        <FaFacebook className="icons" />
        <FaLinkedin className="icons" />
        <FaTwitter className="icons" />
        <FaGooglePlus className="icons" />
        <FaYoutube className="icons" />
      </div>
      <p className="mt-3">&copy;Md. Al Amin Hossain</p>
    </footer>
  );
};

export default Footer;
