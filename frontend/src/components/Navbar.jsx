import React, { useState } from "react"
import { menuItems } from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
            <li className="menu-items" 
            style={{ display: "inline", padding: "20px"}}
            key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;