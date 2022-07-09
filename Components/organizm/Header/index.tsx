import React from "react";
import Router from "next/router";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, Grid, Menu, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import { Drawer } from "../Drawer";

export const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [isInfoModal, setInfoModal] = React.useState(false);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    Router.push({
      pathname: "/Profile",
    });
    handleMobileMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <>
      <Box borderBottom="1px solid #d5d2cd">
        <AppBar
          position="static"
          sx={{
            boxShadow: "unset",
            background: "#fff",
            borderBottom: "1px solid #e9e9e9",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => props.onChangeModal()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#1976d2" }}
            ></Typography>
            <Stack direction="row" spacing={2.5} alignItems="center">
              <Badge badgeContent={4} color={"warning"} sx={{ marginTop: 0.5 }}>
                <MailIcon
                  color="primary"
                  fontSize="medium"
                  onClick={() => setInfoModal(true)}
                />
              </Badge>
              <AccountCircleIcon
                onClick={handleProfileMenuOpen}
                color="primary"
                fontSize="medium"
              />
            </Stack>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      <Drawer
        isOpen={isInfoModal}
        onChangeModal={() => setInfoModal(!isInfoModal)}
      />
    </>
  );
};
