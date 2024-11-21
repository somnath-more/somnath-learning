import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { NavBarElementType } from "../../Types";
import { NAVBARELEMENTS } from "../../Constants";
import { Form } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../../contexts";
import NavDropdown from "../../molecules/NavDropdown";


const NavBar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from the context
  const isDarkMode = theme === "dark"; // Determine if the current theme is dark

  const handleNavBarNavigation = (item: NavBarElementType) => {
    navigate(item.path);
  };

  return (
    <Navbar
      expand="lg"
      className={`py-3 ${isDarkMode ? "bg-dark" : "bg-light"}`}
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
            color: isDarkMode ? "#ffffff" : "#000000",
            transition: "color 0.3s ease",
          }}
        >
          {isDarkMode ? "🌙 Somnath Portfolio" : "☀️ Somnath Portfolio"}
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
                  color: isDarkMode ? "#cccccc" : "#333333",
                  marginRight: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = isDarkMode
                    ? "#ffffff"
                    : "#000000")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isDarkMode
                    ? "#cccccc"
                    : "#333333")
                }
              >
                {item.label}
              </Nav.Link>
            ))}
            {/* Added Molecules */}
            <NavDropdown/>
         
          </Nav>

          {/* Dark/Light Mode Toggle */}
          <Form.Check
            type="switch"
            id="theme-switch"
            label={isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            checked={isDarkMode}
            onChange={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "1.2rem",
              color: isDarkMode ? "#ffffff" : "#000000",
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
