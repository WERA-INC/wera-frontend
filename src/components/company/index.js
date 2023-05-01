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
  const [id, setId] = useState(null);
  const [data, setData] = useState({});
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("dashboard");
  const navigator = useNavigate();
  const [errors, setErrors] = useState([]);
  const [recruiterFormData, setEditrecruiterFormData] = useState({});

  useEffect(() => {
    const employerId = localStorage.getItem("employerId");
    setId(employerId);
  }, []);
  // Monitors change in form input and sets them to state under the variable editrecruiterFormData
  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setEditrecruiterFormData({
      ...recruiterFormData,
      [name]: value,
    });
  }
  // On clicking edit, the changes are made to the database through PATCH method
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    fetch(`http://localhost:3000/employers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recruiterFormData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((recruiter) => {
          setData(recruiter);

          navigator(`/company/jobs`);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

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
    fetch(`http://localhost:3000/employers/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setData(data);
          setEditrecruiterFormData(data);
        });
      }
    });
  }, [id]);

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
                  onClick={() => navigate("/company/jobs")}
                  label="posted jobs"
                />
                <Tab
                  value="jobs"
                  onClick={() => navigate("/company/add-job")}
                  label="Add Job"
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
          <div className="justify-start items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <form
                    className="row g-3 needs-validation text-gray-950 pt-2"
                    onSubmit={handleSubmit}
                    novalidate
                  >
                    <div className="w-2/3 mx-auto">
                      <label htmlFor="company_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        onChange={handleInputs}
                        name="company_name"
                        value={recruiterFormData.company_name}
                        required
                      />
                    </div>

                    <div className="w-2/3 mx-auto">
                      <label htmlFor="company_location" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company_location"
                        onChange={handleInputs}
                        name="company_location"
                        value={recruiterFormData.company_location}
                        required
                      />
                    </div>
                    <div className="w-2/3 mx-auto">
                      <label htmlFor="email_address" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email_address"
                        onChange={handleInputs}
                        name="email_address"
                        value={recruiterFormData.email_address}
                        required
                      />
                    </div>

                    <div className="form-group w-2/3 mx-auto">
                      <label htmlFor="company_description">
                        Company Description
                      </label>
                      <textarea
                        className="form-control"
                        id="company_description"
                        rows="3"
                        name="company_description"
                        value={recruiterFormData.company_description}
                        onChange={handleInputs}
                      ></textarea>
                    </div>
                    <div className="mx-auto">
                      <button
                        className="text-blue-950 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal1(false)}
                      >
                        Close
                      </button>
                      <button
                        className=" text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="submit"
                        style={{ backgroundColor: "#0D2644" }}
                        onClick={() => setShowModal2(false)}
                      >
                        Edit
                      </button>
                    </div>
                    <ul>
                      {errors.length > 0
                        ? errors.map((err) => <li key={err}>{err}</li>)
                        : null}
                    </ul>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div className="justify-start items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
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
                  <h1 class="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                    {data.company_name}
                  </h1>
                  <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  <p class="pt-4 text-base font-bold flex items-center justify-start ">
                    <svg
                      class="h-4 fill-current text-green-700 pr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    Email - {data.email_address}
                  </p>
                  <p class="pt-4 text-base font-bold flex items-center justify-start ">
                    <svg
                      class="h-4 fill-current text-green-700 pr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg>
                    Location - {data.company_location}
                  </p>

                  <p class="pt-8 text-base font-bold flex items-center justify-start  text-center">
                    <svg
                      class="h-4 fill-current text-green-700 pr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg>
                    About
                  </p>
                  <p class="pt-2 ps-10 text-base text-left">
                    {data.company_description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-blue-950 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Close
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
