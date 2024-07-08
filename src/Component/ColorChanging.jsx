// App.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function ColorChanging() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (e) => {
    e.preventDefault();
    const newColor = e.target.id;
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <header>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" aria-current="page">
            Home
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/manjeet">
              Manjeet
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="canvas">
        <div className="button-group">
          <Button
            variant="secondary"
            id="grey"
            style={{ backgroundColor: "#grey" }}
            onClick={handleColorChange}
          />
          <Button
            variant="primary"
            id="blue"
            style={{ backgroundColor: "#blue" }}
            onClick={handleColorChange}
          />
          <Button
            variant="light"
            id="white"
            style={{ backgroundColor: "#white" }}
            onClick={handleColorChange}
          />
          <Button
            variant="warning"
            id="yellow"
            style={{ backgroundColor: "#yellow" }}
            onClick={handleColorChange}
          />
        </div>
      </div>
    </header>
  );
}

export default ColorChanging;
