import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {
  Tabs,
  Tab,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
// import Person_Avatar from "../images/Person_Avatar.png";
// import Logo5 from "../images/Logo5.png";

const pages = ["Dashboard", "Jobs"];

const CompanyNav = () => {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("dashboard");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActive(!active);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Define logOut fuction here
  // const handleLogOut = () => {
  //   console.log("log out!");
  // };

  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setSelectedTab("dashboard");
    } else {
      setSelectedTab(pathnameArray[2]);
    }
  }, [pathnameArray]);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ minHeight: 80 }}
        style={{ backgroundColor: " #0D2644" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
            // sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            // component={Link}
            // to={"/company/dashboard"}
            >
              <img
                alt="Logo"
                src={"/images/Logo5.png"}
                style={{ width: "140px", height: "60px", marginRight: "20px" }}
              ></img>
            </Box>

            {/* MENU BUTTONS ICON ON DROPDOWN */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/* MENU APPBAR ICON ON DROPDOWN */}

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
              ></Menu>
            </Box>

            {/* WERA LOGO ON DROPDOWN*/}

            <Box
              component={Link}
              // to={"/company/dashboard"}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <img
                alt=""
                src={"/images/Logo5.png"}
                style={{
                  width: "150px",
                  height: "30px",
                  justify: "center",
                  marginRight: "80px",
                  marginLeft: "50px",
                }}
              ></img>
            </Box>

            {/* MENU BUTTONS ON SCREEN ABOVE MD */}
            <Box
              sx={{
                textTransform: "none",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // padding: "0px 5px",
                paddingTop: "10px",
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                TabIndicatorProps={{ hidden: true }}
                sx={{
                  "& button": {
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    height: 70,
                    color: "white",
                    fontSize: "1rem",
                  },
                  "& button.Mui-selected": {
                    color: "black",
                    backgroundColor: "#e5e5e5",
                  },
                }}
              >
                <Tab
                  value="jobs"
                  onClick={() => navigate("/company/:id/jobs")}
                  label="Jobs"
                />
              </Tabs>
            </Box>

            {/* NOTIFICATION, TUNE AND PROFILE ICONS  */}

            <Box sx={{ display: "flex", flexGrow: 0 }}>
              <Tooltip title="Log Out">
                <IconButton
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                  sx={{ color: "white" }}
                >
                  {/* <LogoutIcon /> */}
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Moringa School" />
                </IconButton>
              </Tooltip>

              {/* PROFILE SETTINGS ON DROP DOWN */}

              <Menu
                sx={{ mt: "45px" }}
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Box display="flex" alignItems="center" textAlign="center">
                    <Person2OutlinedIcon
                      sx={{ color: `primary.main`, mr: 1 }}
                    />
                    {/* <ViewCompany /> */}
                    <span onClick={() => setShowModal2(true)}>
                      View Profile
                    </span>
                  </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Box display="flex" alignItems="center" textAlign="center">
                    <Person2OutlinedIcon
                      sx={{ color: `primary.main`, mr: 1 }}
                    />
                    <span onClick={() => setShowModal1(true)}>
                      Edit Profile
                    </span>
                    {/* <EditCompany /> */}
                  </Box>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Box
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    <LogoutIcon sx={{ color: `primary.main`, mr: 1 }} />
                    Logout
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
            <Box display={{ xs: "none", md: "block" }} sx={{ ml: 1 }}>
              <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
                Welcome
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 200 }}>
                Recruiter
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      {showModal1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Profile here</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal1(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">View Profile here</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal2(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default CompanyNav;
