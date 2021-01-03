import React from "react";

const Menu = ({ menuItems }) => {
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
