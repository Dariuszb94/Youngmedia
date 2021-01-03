import React from "react";
import Logo from "../../Assets/logo_front.png";
import Menu from "./HeaderComponents/Menu";
import "./HeaderStyle.css";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
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
  if (error) return <p>Error :(</p>;
  return (
    <section className="header">
      {data ? (
        <div className="header__content">
          <a href="/">
            <img className="header__logo" src={Logo} alt="ym" />
          </a>
          <Menu menuItems={data} />
        </div>
      ) : null}
    </section>
  );
};

export default Header;
