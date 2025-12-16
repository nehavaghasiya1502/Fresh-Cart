import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from "../assets/logo/logo3.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaNewspaper, FaEnvelope, FaStore } from "react-icons/fa";
import { useEffect, useState } from "react";


  function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="FreshCart"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto nav-center">
            <Nav.Link href="/" className="nav-item-icon">
              Home <FaHome />
            </Nav.Link>

            <Nav.Link href="/about" className="nav-item-icon">
              About <FaInfoCircle />
            </Nav.Link>

            <Nav.Link href="/news" className="nav-item-icon">
              News <FaNewspaper />
            </Nav.Link>

            <Nav.Link href="/contact" className="nav-item-icon">
              Contact  <FaEnvelope />
            </Nav.Link>

            <Nav.Link href="/shop" className="nav-item-icon">
              Shop <FaStore />
            </Nav.Link>
          </Nav>

          <div className="header-icons">
            <FaShoppingCart />
            <FaSearch />
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;
