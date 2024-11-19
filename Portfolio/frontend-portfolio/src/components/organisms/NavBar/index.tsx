import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NAVBARELEMENTS } from "../../Constants";
import { NavBarElementType } from "../../Types";


const OuterNavBar = styled(Box)({
  backgroundColor: "#282c34",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const LeftGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

interface NavItemProps {
  active: boolean;
}

// NavItem with hover, active styling, and background color transition
const NavItem = styled(Typography)<NavItemProps>(({ active }) => ({
  color: active ? "red" : "#ffffff",
  cursor: "pointer",
  padding: "5px 15px",
  borderRadius: "8px",
  backgroundColor: active ? "rgba(97, 218, 251, 0.2)" : "transparent",
  transition: "color 0.3s, background-color 0.3s, transform 0.3s",
  "&:hover": {
    color: "#61dafb",
    transform: "scale(1.05)",
  },
  fontSize: "20px",
  fontWeight: 'bold',
  letterSpacing: '-0.02em',
}));

const DrawerBox = styled(Box)({
  backgroundColor: "#282c34",
  color: "#ffffff",
  height: "100%",
});

const DrawerListItem = styled(ListItem)({
  padding: "15px 20px",
  "&:hover": {
    backgroundColor: "#333",
  },
});

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavBarNavigation = (item: NavBarElementType) => {
    navigate(item.path);
    setMobileOpen(false); // Close Drawer after navigation on mobile
  };

  const PortFolioText = styled(Typography)({
    color: "white",
    fontWeight: "bold",
  });

  const drawer = (
    <DrawerBox>
      <List>
        {NAVBARELEMENTS.map((navItem) => (
          <DrawerListItem
            key={navItem.label}
            onClick={() => handleNavBarNavigation(navItem)}
          >
            <ListItemText primary={navItem.label} />
          </DrawerListItem>
        ))}
      </List>
    </DrawerBox>
  );

  return (
    <OuterNavBar>
      <PortFolioText variant="h4">Somnath More</PortFolioText>

      {/* Desktop Navbar */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <LeftGrid>
          {NAVBARELEMENTS.map((item) => (
            <NavItem
              key={item.label}
              active={location.pathname === item.path}
              onClick={() => handleNavBarNavigation(item)}
            >
              {item.label}
            </NavItem>
          ))}
        </LeftGrid>
      </Box>

      {/* Mobile Menu Icon */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon style={{ color: "#ffffff" }} />
        </IconButton>
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </OuterNavBar>
  );
};
export default NavBar;
