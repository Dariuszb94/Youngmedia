import React, { useState, useEffect } from "react";
import Logo from "../../Assets/logo_front.png";
import Menu from "./HeaderComponents/Menu";
import "./HeaderStyle.css";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import BurgerOpen from "@material-ui/icons/Menu";
import BurgerClose from "@material-ui/icons/Close";
const EXCHANGE_RATES = gql`
  query MyQuery {
    menus {
      edges {
        node {
          menuItems {
            edges {
              node {
                label
                path
              }
            }
          }
        }
      }
    }
  }
`;
const Header = () => {
  const { error, data } = useQuery(EXCHANGE_RATES);
  const [showMenu, showMenuChange] = useState(false);

  if (error) return <p>Error :(</p>;
  return (
    <section className="header">
      {data ? (
        <div className="header__content">
          <a href="/Youngmedia">
            <img className="header__logo" src={Logo} alt="ym" />
          </a>
          <Menu menuItems={data} showMenu={showMenu} />
          {!showMenu ? (
            <BurgerOpen
              className="menu__burger menu__burger--open"
              onClick={() => showMenuChange(true)}
            />
          ) : null}
          {showMenu ? (
            <BurgerClose
              className=" menu__burger menu__burger--close"
              onClick={() => showMenuChange(false)}
            />
          ) : null}
          <div className={`overlay${showMenu ? "--active" : ""}`} />
        </div>
      ) : null}
    </section>
  );
};

export default Header;
