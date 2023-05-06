import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarmenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <Navbar bg="light" expand="lg">
      <NavDropdown
        title="Categories"
        id="basic-nav-dropdown"
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavDropdown.Item href="#women">Woman</NavDropdown.Item>
        <NavDropdown.Item href="#men">Man</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#home-parfumes">Home Parfumes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Woman Clothes"
        id="basic-nav-dropdown"
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
        <NavDropdown.Item href="#">Underwears</NavDropdown.Item>
        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
        <NavDropdown.Item href="#">Blouses</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        title="Man Clothes"
        id="basic-nav-dropdown"
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
        <NavDropdown.Item href="#">Pants</NavDropdown.Item>
        <NavDropdown.Item href="#">Underwears</NavDropdown.Item>
        <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
        <NavDropdown.Item href="#">Blouses</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#">Home Parfumes</Nav.Link>
    </Navbar>
  );
}

export default Navbarmenu;
