import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };


  return (
    <Dropdown>
    <Dropdown.Toggle onClick={handleDropdownClick}>
      First Dropdown Item
    </Dropdown.Toggle>
    <Dropdown.Menu show={showDropdown}>
      <Dropdown.Item>Second Item</Dropdown.Item>
      <Dropdown.Item>Third Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   
  );
}

export default Navbar;