import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem> */}
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Stats
            </MenuItem>
            <MenuItem
              component={Link}
              to="/historical-data"
              onClick={handleClose}
            >
              Historical Data
            </MenuItem>
            {/* <MenuItem component={Link} to="/profiles" onClick={handleClose}>
              Manager Profiles
            </MenuItem> */}
          </Menu>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Mo Chicken Fantasy Football League
          </Typography>
          <Typography variant="p" component="div">
            Est. 2014
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
