import React from "react";
import { useTheme } from "../../../contexts";
import { NavDropdown } from "react-bootstrap";

const navData = [
  { id: 1, name: "Education" },
  { id: 2, name: "Work Experience" },
];

const NavaDropdown = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Reusable function for dropdown item styles
  const getItemStyle = (hover: boolean = false) => ({
    backgroundColor: hover
      ? isDarkMode
        ? "#495057" // Dark mode hover color
        : "#f1f1f1" // Light mode hover color
      : isDarkMode
      ? "#343a40" // Dark mode base color
      : "#ffffff", // Light mode base color
    color: hover ? "#ffffff" : isDarkMode ? "#ffffff" : "#000000", // Adjust text color for hover
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  return (
    <NavDropdown
      title="Other"
      id="navbarScrollingDropdown"
      className={`dropdown-menu-right ${isDarkMode ? "text-light bg-dark" : "text-dark bg-light"}`}
    >
      {navData.map((data) => (
        <NavDropdown.Item
          key={data.id}
          href="#action3"
          style={getItemStyle()}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, getItemStyle(true));
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, getItemStyle());
          }}
        >
          {data.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default NavaDropdown;
