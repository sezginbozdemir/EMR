import React, { useState } from "react"
import "./Andreea.css"
import Dropdown from './Dropdown';

export const menuItems = [
    {
      title: 'Categories',
      url: '',
      
    },
    {
      title: 'Women Clothing',
      url: '',
      submenu: [
        {
          title: 'Pants',
          url: '',
        },
        {
          title: 'Pyjamas',
          url: '',
        },
        {
          title: 'T-shirts',
          url: '',
        },
        {
            title: 'Underwears',
            url: '',
          },
          {
            title: 'Trousers',
            url: '',
          },
          {
            title: 'Cosmetics',
            url: '',
          },
      ],
    },
    {
      title: 'Men Clothing',
      url: '',
    },
    {
        title: 'Room Fragnance',
        url: '',
      },
      {
        title: 'Summer Season',
        url: '',
      },
      {
        title: 'Winter Season',
        url: '',
      },
      {
        title: 'Second Hand Manequins',
        url: '',
      },
    
  ];

  

const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;