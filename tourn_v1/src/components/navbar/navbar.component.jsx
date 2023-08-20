import React from "react";
import "./navbar.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import Logo from "../../assets/web_Logo.png";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="options">
        <img src={Logo} alt="logo" />
        <ul className="nav_options">
          <li>Home</li>
          <li>Tournaments</li>
          <li>Leaderboards</li>
        </ul>
      </div>
      <div className="nav_btns">
        <CustomButton>Login</CustomButton>
        <CustomButton>Sign up</CustomButton>
      </div>
    </div>
  );
};

export default NavBar;
