import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router";
import { NavBarElementType } from "../../Types";
import { NAVBARELEMENTS } from "../../Constants";
import { Form } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleNavBarNavigation = (item: NavBarElementType) => {
    navigate(item.path);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.style.backgroundColor = darkMode ? "#ffffff" : "#121212";
    document.body.style.color = darkMode ? "#000000" : "#ffffff";
  };

  return (
    <Navbar
      expand="lg"
      className={`py-3 ${darkMode ? "bg-dark" : "bg-light"}`}
      style={{
        width: "100%",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: darkMode ? "#ffffff" : "#000000",
            transition: "color 0.3s ease",
          }}
        >
          {darkMode ? "🌙 Somnath Portfolio" : "☀️ Somnath Portfolio"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {NAVBARELEMENTS.map((item) => (
              <Nav.Link
                key={item.label}
                onClick={() => handleNavBarNavigation(item)}
                style={{
                  fontSize: "1rem",
                  color: darkMode ? "#cccccc" : "#333333",
                  marginRight: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = darkMode
                    ? "#ffffff"
                    : "#000000")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = darkMode
                    ? "#cccccc"
                    : "#333333")
                }
              >
                {item.label}
              </Nav.Link>
            ))}
            <NavDropdown
              title="About"
              id="navbarScrollingDropdown"
              style={{
                color: darkMode ? "#cccccc" : "#333333",
                transition: "color 0.3s ease",
              }}
            >
              <NavDropdown.Item href="#action3">Education</NavDropdown.Item>
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Work Experience</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Dark/Light Mode Toggle */}
          <Form.Check
            type="switch"
            id="theme-switch"
            label={darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            checked={darkMode}
            onChange={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "1.2rem",
              color: darkMode ? "#ffffff" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
