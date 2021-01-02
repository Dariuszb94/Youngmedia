import React, { useEffect, useState } from "react";
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
const Menu = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [menuItems, menuItemsChange] = useState();
  useEffect(() => {
    menuItemsChange(data);
  }, [data]);

  if (error) return <p>Error :(</p>;

  return (
    <ul className="menu">
      {menuItems
        ? menuItems.menus.edges[0].node.menuItems.edges.map(function (item, i) {
            return (
              <li key={i} className="menu__element">
                <a className="menu__element__link" href={item.node.path}>
                  {item.node.label}
                </a>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default Menu;
