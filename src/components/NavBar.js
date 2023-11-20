import React, { useState, useEffect } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, seScroller] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  }, []);

  return (
    <Navbar expand="md" className ={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
