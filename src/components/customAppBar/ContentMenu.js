import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BaseStyledNavLink } from "./appBarStyles";

export const ContentMenu = ({ icon, navObject }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {navObject.map((link, index) => {
          return (
            <MenuItem onClick={handleClose} key={index}>
              <BaseStyledNavLink to={link.route} style={{ color: "black" }}>
                {link.label}
              </BaseStyledNavLink>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
