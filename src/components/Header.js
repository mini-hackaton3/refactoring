import React from "react";
import { useState } from "react";
import {
  HeaderButtonDiv,
  HeaderDiv,
  HeaderSignUp,
  HeaderTitle,
} from "../styles/Header/HeaderStyles";
import { HeaderLogin } from "./../styles/Header/HeaderStyles";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSign, setIsSign] = useState(true);

  const ToggleSign = () => {
    setIsSign(!isSign);
  };

  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/"> 루튼 토마토</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ToggleSign} style={{ fontSize: "10pt" }}>
            {isSign ? "Sign Out" : <Link to="/login">Sign In</Link>}
          </Nav.Link>
          <Nav.Link style={{ fontSize: "10pt" }}>
            <Link to="/SignUp">Sign Up</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
