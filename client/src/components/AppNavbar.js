import React, { useState } from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

const AppNavbar = props => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <NavbarBrand href="#home">My Blog</NavbarBrand>
      </Navbar>
    </>
  );
};
export default AppNavbar;
