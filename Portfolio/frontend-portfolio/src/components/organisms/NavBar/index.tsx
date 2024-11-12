import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

// Navbar container
const OuterNavBar = styled(Box)({
  backgroundColor: "#282c34", // Dark background for a modern look
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
});

const LeftGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

interface NavItemProps {
  active: boolean;
}
const NavItem = styled(Typography)<NavItemProps>(({ active }) => ({
  color: active ? "red" : "#ffffff",
  cursor: "pointer",
  transition: "color 0.3s, background-color 0.3s",
  "&:hover": {
    color: "#61dafb",
    transition: 'scale(0.4)'
  },
}));


// Drawer box styling for mobile
const DrawerBox = styled(Box)({
  backgroundColor: "#282c34", // Same background as navbar
  color: "#ffffff", // Text color
  height: "100%",
});

// Drawer list item styling
const DrawerListItem = styled(ListItem)({
  padding: "15px 20px",
  "&:hover": {
    backgroundColor: "#333", // Darker background on hover
  },
});

// Navbar items configuration
const NavBarElement = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {label: "Skill", path: "/skills"},
  { label: "Contact", path: "/contact" },
  { label: "Projects", path: "/projects" },
  { label: "Notes", path: "/notes"}
  
];

const NavBar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
   const [activeTab,setActivetab] = useState('Home');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavBarNavigation = (item:any) => {
    
    setActivetab(item.label);
       navigate(item.path);

  }

  const PortFolioText = styled(Typography)({
    color: "white",
    fontWeight: "bold",
  });
  const drawer = (
    <DrawerBox>
      <List>
        {NavBarElement.map((navabar) => (
          <DrawerListItem
            key={navabar.label}
            onClick={() => navigate(navabar.path)}
          >
            <ListItemText primary={navabar.label} />
          </DrawerListItem>
        ))}
      </List>
    </DrawerBox>
  );

  return (
    <OuterNavBar>
      <PortFolioText variant="h4">Somnath More</PortFolioText>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <LeftGrid>
          {NavBarElement.map((item) => (
            <NavItem key={item.label} active={activeTab === item.label ? true :false} onClick={()=>handleNavBarNavigation(item)}>
              {item.label}
            </NavItem>
          ))}
        </LeftGrid>
      </Box>
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
