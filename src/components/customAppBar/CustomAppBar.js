import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import AccountMenu from "./AccountMenu";
import { ContentMenu } from "./ContentMenu";
import * as styles from "./appBarStyles";

export const StyledAppBar = () => {
  const accountCircleIcon = (
    <AccountMenu icon={<styles.StyledAccountCircle />} />
  );
  const accountDotIcon = <AccountMenu icon={<styles.StyledHiDotsVertical />} />;

  const [userInput, setUserInput] = useState("");
  const [accountIcon, setAccountIcon] = useState([accountCircleIcon]);

  const handleUserInput = (event) => {
    const input = event.target.value;
    setUserInput(input);
  };

  const pages = [
    { label: "MOVIES", route: "" },
    { label: "TV SHOWS", route: "bigMind" },
    { label: "TRENDING", route: "void" },
    { label: "PRICING", route: "pricing" },
  ];
  const buttonLinks = pages.map((page) => {
    return (
      <styles.StyledNavLink to={page.route}>{page.label}</styles.StyledNavLink>
    );
  });
  const Menu = (
    <styles.GiHamburgerMenuWrapper>
      <ContentMenu navObject={pages} icon={<styles.StyledGiHamburgerMenu />} />
    </styles.GiHamburgerMenuWrapper>
  );
  const Logo = (
    <styles.StyledLogo>
      <styles.BaseStyledNavLink to="">
        <h4 name="title">VueMix</h4>
      </styles.BaseStyledNavLink>
    </styles.StyledLogo>
  );

  const Links = (
    <styles.NavLinkContainer>{buttonLinks}</styles.NavLinkContainer>
  );

  const InputContainer = (
    <styles.Wrapper>
      <styles.StyledInputContainer>
        <AiOutlineSearch
          style={{ paddingLeft: "0.5rem", color: "white" }}
        ></AiOutlineSearch>
        <styles.StyledInput
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleUserInput}
          value={userInput}
        ></styles.StyledInput>
      </styles.StyledInputContainer>
    </styles.Wrapper>
  );

  const CustomSwitch = (
    <styles.SwitchWrapper>
      <FormGroup>
        <FormControlLabel
          control={<Switch onClick={() => {}} size="small" />}
          label={
            <Typography style={{ color: "white", fontSize: "0.75rem" }}>
              Mode
            </Typography>
          }
        />
      </FormGroup>
    </styles.SwitchWrapper>
  );

  // const CustomAccountCircle = ;
  //TODO: Need to useEffect for inital render and watch changes to some variable maybe
  //TODO: Doesnt render properly on the intal device set up like this below
  const mql = window.matchMedia("(min-width: 850px)");
  let mobileView = mql;
  mql.addEventListener("change", (e) => {
    e.matches
      ? setAccountIcon([accountCircleIcon])
      : setAccountIcon([accountDotIcon]);
  });

  console.log("mobileView:", mobileView);

  return (
    <styles.AppBar>
      {Menu}
      {/* Logo Start */}
      {Logo}
      {/* NavLinks Start */}
      {Links}
      {/* Search Icon && Input Start */}
      {InputContainer}
      {/* Switch Start */}
      {CustomSwitch}
      {/* Account Circle */}
      {accountIcon}
    </styles.AppBar>
  );
};
