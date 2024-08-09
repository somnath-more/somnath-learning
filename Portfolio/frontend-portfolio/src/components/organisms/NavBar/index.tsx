import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Grid, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const OuterNavBar = styled(Box)({
  background: "pink",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const LeftGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const NavBarElement =[
    {
      label: "Home",
      path: "/",
      icon: <MenuIcon />
    },
    {
      label: "About",
      path: "/about",
      icon: <MenuIcon />
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <MenuIcon />
    },
    {
      label: "Visitor",
      path: "/visitor",
      icon: <MenuIcon />
    }
  
]

const DrawerBox=styled(Box)({
    display: "flex",
    textAlign: "center",
    marginTop: "20%",
})
const NavBar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <DrawerBox onClick={handleDrawerToggle} >
      <List>
        {NavBarElement.map((navabar) => (
          <ListItem  key={navabar.label} onClick={() => navigate(navabar.path)}>
            <ListItemText primary={navabar.label} />
          </ListItem>
        ))}
      </List>
    </DrawerBox>
  );


  return (
    <OuterNavBar>
      <Typography variant="h4" sx={{display:"flex"}} children={"Somnath-More"}></Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <LeftGrid>
          <Typography variant="body1" onClick={() => navigate("/")}>
            Home
          </Typography>
          <Typography variant="body1" onClick={() => navigate("/about")}>
            About
          </Typography>
          <Typography variant="body1" onClick={() => navigate("/contact")}>
            Contact
          </Typography>
          <Typography variant="body1" onClick={() => navigate("/visitor")}>
            Visitor
          </Typography>
        </LeftGrid>
      </Box>
      
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
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
