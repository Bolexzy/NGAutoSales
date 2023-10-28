"use client";

import NoCrashIcon from "@mui/icons-material/NoCrash";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import styles from "./navbar.module.css";
import { LinearProgress } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const pages = ["Home", "About", "Faq"];
const settings = [
  { Profile: "dashboard/my-profile" },
  { Adverts: "dashboard/my-adverts" },
  { Dashboard: "dashboard" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      className={styles.appbar}
      sx={{ backgroundColor: "#1F2720" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo  */}
          {/* <NoCrashIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          /> */}

          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src={"/logo.png"}
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/#"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: "0.15938rem",
              textDecoration: "none",
              fontFamily: "DM Sans",
              fontSize: "1.1rem",
              fontStyle: "italic",
              lineHeight: "normal",
              color: "#F4F4F4",
            }}
            className={styles.text}
          >
            NGAutoSales
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#F4F4F4"
            >
              <MenuIcon sx={{ color: "#F4F4F4" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    textAlign="center"
                    underline="none"
                    color={"inherit"}
                    href={page === "Home" ? "/#" : `/${page}`}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontFamily: "DM Sans",
                        fontSize: "1rem",
                        fontWeight: 400,
                        letterSpacing: "0.14194rem",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <NoCrashIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image
              src={"/logo.png"}
              width={30}
              height={30}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/#"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "DM Sans",
              fontSize: "1.06rem",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "0.15938rem",
              textDecoration: "none",
              color: "#F4F4F4",
              WebkitTextStroke: "1px #F4F4F4",
            }}
          >
            NGAutoSales
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: ".8rem",
                }}
                href={page === "Home" ? "/#" : `/${page}`}
                className={styles.text}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  alt="Remy Sharp"
                  sx={{ fontSize: "2.5rem", color: "#F4F4F4" }}
                />

                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                textAlign: "center",
                fontFamily: "Inter",
                fontWeight: 400,
                letterSpacing: "0.14194rem",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <a
                    sx={{
                      textAlign: "center",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      letterSpacing: "0.14194rem",
                    }}
                    href={`https://car-autos-ng-alx-webstack-6rz2.vercel.app/${
                      setting[Object.keys(setting)[0]]
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${Object.keys(setting)[0]}`}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
