import React, { useEffect, useState } from "react";
import Logo from "../../Assets/logo_front.png";
import Menu from "./HeaderComponents/Menu";
import "./HeaderStyle.css";
const Header = () => {
  return (
    <section className="header">
      <div className="header__content">
        <a href="/">
          <img className="header__logo" src={Logo} alt="ym" />
        </a>
        <Menu />
      </div>
    </section>
  );
};

export default Header;
