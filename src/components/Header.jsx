import React from 'react';
import logo from "../images/logo_3.png";

const Header = () => {
  return (
      <header className="header root__section">
        <img src={logo} alt="mesto logo" className="logo"/>
      </header>
  );
};

export default Header;