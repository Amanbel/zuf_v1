import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="contact_us">
        <h1>CONTACT US</h1>
        <ul>
          <li>amanuel11belachew@gmail</li>
          <li>0953460390</li>
        </ul>
      </div>
      <div className="policies">
        <h1>POLICIES</h1>
        <ul>
          <li>Privacy Policy</li>
          <li>Disclosure Policy</li>
          <li>User Agreement</li>
        </ul>
      </div>
      <div className="help">
        <h1>HELP</h1>
        <ul>
          <li>Privacy Policy</li>
          <li>Disclosure Policy</li>
          <li>User Agreement</li>
        </ul>
      </div>
      <div className="socials">socials</div>
    </div>
  );
};

export default Footer;
