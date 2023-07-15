import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../css/Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
      <Navbar className="header" expand="lg">
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? "show" : ""}>
          <Nav className="menu-nav ml-auto mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#demos">Produk</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
       
        <div className="ml-auto">
          <button className="btn-hero">Kontak Kami</button>
        </div>
         </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
