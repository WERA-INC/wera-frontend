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
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Person_Avatar from "../images/Person_Avatar.png";
import Logo5 from "../images/Logo5.png";

const pages = [
    "Dashboard",
    "Jobs",
];

const CompanyNav = () => {
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
    const handleLogOut = () => {
        console.log("log out!")
    }

    useEffect(() => {
        if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
            setSelectedTab("dashboard");
        } else {
            setSelectedTab(pathnameArray[2]);
        }
    }, [pathnameArray]);

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ minHeight: 80 }} style={{ backgroundColor: " #0D2644" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            // sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                            // component={Link}
                            // to={"/company/dashboard"}
                        >
                            <img
                                alt="Logo"
                                src={Logo5}
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
                            >                                
                            </Menu>
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
                                src={Logo5}
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
                                {/* <Tab
                                    value="dashboard"
                                    onClick={() => navigate("dashboard")}
                                    label="Dashboard"
                                /> */}
                                <Tab
                                    value="jobs"
                                    onClick={() => navigate("jobs")}
                                    label="Jobs"
                                />
                            </Tabs>
                        </Box>

                        {/* NOTIFICATION, TUNE AND PROFILE ICONS  */}

                        <Box sx={{ display: "flex", flexGrow: 0 }}>
                            <Tooltip title="Log Out">
                                <IconButton onClick={handleLogOut} sx={{ color: "white" }}>
                                    {/* <LogoutIcon /> */}
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Moringa School" src={Person_Avatar} />
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
                                        View Profile
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Box display="flex" alignItems="center" textAlign="center">
                                        <LogoutIcon
                                            onClick={handleLogOut}
                                            sx={{ color: `primary.main`, mr: 1 }}
                                        />
                                        Logout
                                    </Box>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box display={{ xs: "none", md: "block" }} sx={{ ml: 1 }}>
                            <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
                                Moringa School
                            </Typography>
                            <Typography sx={{ fontSize: "0.9rem", fontWeight: 200 }}>
                                Recruiter
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
};
export default CompanyNav;
