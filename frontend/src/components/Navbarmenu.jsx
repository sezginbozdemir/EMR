import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarmenu() {
  const [dropdownStates, setDropdownStates] = useState([
    { id: 'categories', show: false },
    { id: 'woman-clothes', show: false },
    { id: 'man-clothes', show: false },
    { id: 'home-parfumes', show: false },
  ]);

  const handleMouseEnter = (id) => {
    const updatedStates = dropdownStates.map((dropdownState) =>
      dropdownState.id === id ? { ...dropdownState, show: true } : { ...dropdownState, show: false }
    );
    setDropdownStates(updatedStates);
  };

  const handleMouseLeave = (id) => {
    const updatedStates = dropdownStates.map((dropdownState) =>
      dropdownState.id === id ? { ...dropdownState, show: false } : dropdownState
    
    );
    setDropdownStates(updatedStates);
  };

  return (
    <Navbar className='emrNavbar'  expand="lg">
      <NavDropdown
        title="Categories"
        id="categories"
        show={dropdownStates.find((state) => state.id === 'categories').show}
        onMouseEnter={() => handleMouseEnter('categories')}
        onMouseLeave={() => handleMouseLeave('categories')}
      >
        <NavDropdown.Item href="#women">Woman</NavDropdown.Item>
        <NavDropdown.Item href="#men">Man</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#home-parfumes">Home Parfumes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Woman Clothes"
        id="woman-clothes"
        show={dropdownStates.find((state) => state.id === 'woman-clothes').show}
        onMouseEnter={() => handleMouseEnter('woman-clothes')}
        onMouseLeave={() => handleMouseLeave('woman-clothes')}
      >
        <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
        <NavDropdown.Item href="#">Underwears</NavDropdown.Item>
        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
        <NavDropdown.Item href="#">Blouses</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Man Clothes"
        id="man-clothes"
        show={dropdownStates.find((state) => state.id === 'man-clothes').show}
        onMouseEnter={() => handleMouseEnter('man-clothes')}
        onMouseLeave={() => handleMouseLeave('man-clothes')}
      >
        <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
        <NavDropdown.Item href="#">Underwears</NavDropdown.Item>
        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
        <NavDropdown.Item href="#">Blouses</NavDropdown.Item>
      </NavDropdown>

      </Navbar>
     );
     }

export default Navbarmenu;
