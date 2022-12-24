import * as React from "react";
import { Fragment } from "react";
import { styled, alpha, makeStyles } from "@mui/material/styles";
import styledSC from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreIcon from "@mui/icons-material/MoreVert";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Movies from "../components/Movies";
import Trends from "../components/Trends";
import Pricing from "../components/Pricing";
import { Route, Routes, NavLink } from "react-router-dom";
import { blue, red } from "@mui/material/colors";
import TvShows from "./TvShows";
import { useMode } from "../hooks/modeHook";

// TODO: Add options to the left menu icon
// TODO: Fix Dynamic height change of toolbar covering content
// TODO: add getTitle={props.getTitle} to tv shows and trending | add trailers
// TODO: Refactor this mess of a component, this is making me sad so work in
// TODO: Add type script

// Navigation button names
const pages = [
  { label: "MOVIES", route: "" },
  { label: "TV SHOWS", route: "tvshows" },
  { label: "TRENDING", route: "trending" },
  { label: "PRICING", route: "pricing" },
];

// Needed to render conect below the AppBar
const Wrapper = styledSC.div`
  padding-top: 56px;
  // @media (min-width: 0px): padding-top: 48px;
  // @media (min-width: 600px): padding-top: 56px;
  // @media (min-width: 900px): {padding-top: 80px}
  // @media (min-width: 1250px): padding-top: 60px;
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const BlueSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#1E88E5",
    "&:hover": {
      backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: blue[100],
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Functional Component START
export default function PrimarySearchAppBar(props) {
  // If I have issues with navigation revist state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isLightMode, setIsLightMode] = useMode(false);
  const [userInput, setUserInput] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Function to set user input
  const handleUserInput = (event) => {
    setUserInput(() => {
      console.log(event.target.value);
      return event.target.value;
    });
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="settings" color="inherit">
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          {/* To change AppBar background color sx={{ backgroundColor: "red" }} */}
          <Toolbar sx={{ backgroundColor: isLightMode ? "" : "black" }}>
            {/* Menu Icon */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => {}}
            >
              <MenuIcon />
            </IconButton>
            {/* Title */}
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  // , color: "black"
                },
              }}
            >
              VueMix
            </Typography>

            {/* Nav to other pages */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  paddingLeft: "4rem",
                  gap: "4rem",
                },
              }}
            >
              {/* NAV LINK START */}
              {pages.map((page) => (
                <NavLink
                  to={page.route}
                  style={({ isActive }) => {
                    //TODO: Mark which page button is selected | add onHover effects and underlines

                    return {
                      textDecoration: isActive ? "none" : "none",
                    };
                  }}
                >
                  <Button
                    key={page.route}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",

                      // marginLeft: "1rem",
                    }}
                  >
                    {page.label}
                  </Button>
                </NavLink>
                //  NAV END START
              ))}
            </Box>

            {/* Search field */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleUserInput}
                value={userInput}
              />
            </Search>
            {/* Toggle Switch */}
            {/* Mode Label maybe remove?? */}
            <Fragment>
              <FormGroup>
                <FormControlLabel
                  control={
                    <BlueSwitch
                      onClick={() => {
                        setIsLightMode(!isLightMode);
                        props.getMode(!isLightMode);
                      }}
                    />
                  }
                  label="Mode"
                />
              </FormGroup>
            </Fragment>
            {/* Box needed to separate elements */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                //   edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      {/* Routes */}
      <Wrapper isLightMode={isLightMode}>
        <Routes>
          <Route
            path=""
            element={
              <Movies
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={props.getTitle}
              />
            }
          ></Route>
          <Route
            path="/tvshows"
            element={
              <TvShows
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={props.getTitle}
              />
            }
          ></Route>
          <Route
            path="trending"
            element={
              <Trends
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={props.getTitle}
              />
            }
          ></Route>
          <Route
            path="/pricing"
            element={<Pricing isLightMode={isLightMode} />}
          ></Route>
        </Routes>
      </Wrapper>

      {/* </div> */}
    </Fragment>
  );
}
