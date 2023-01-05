import React, { useState } from "react";
import {
  AppBar as StyledAppBar,
  StyledAccountCircle,
  StyledHiDotsVertical,
  StyledNavLink,
  StyledLogo,
  BaseStyledNavLink,
  NavLinkContainer,
  GiHamburgerMenuWrapper,
  StyledGiHamburgerMenu,
} from "./AppBarStyles";
import AccountMenu from "../account_menu/AccountMenu";
import { ContentMenu } from "../content_menu/ContentMenu";
import { useMode } from "../../hooks/modeHook";
import styled from "styled-components";

export const AppBar = ({ getMode }) => {
  const [accountIcon, setAccountIcon] = useState([
    <AccountMenu icon={<StyledAccountCircle />} />,
  ]);
  const [isLightMode, setIsLightMode] = useMode(false);

  const mql = window.matchMedia("(min-width: 850px)");

  mql.addEventListener("change", (e) =>
    e.matches
      ? setAccountIcon([<AccountMenu icon={<StyledAccountCircle />} />])
      : setAccountIcon([<AccountMenu icon={<StyledHiDotsVertical />} />])
  );

  return (
    <StyledAppBar isLightMode={isLightMode}>
      <Logo />
      <Menu />
      <Container>
        <Links />
        {accountIcon}
      </Container>
    </StyledAppBar>
  );
};

const pages = [
  { label: "MOVIES", route: "" },
  { label: "TV SHOWS", route: "tvshows" },
  { label: "TRENDING", route: "trending" },
  { label: "PRICING", route: "pricing" },
];

const buttonLinks = pages.map((page) => {
  return <StyledNavLink to={page.route}>{page.label}</StyledNavLink>;
});

const Logo = (props) => (
  <StyledLogo>
    <BaseStyledNavLink to="">
      <h4 name="title">VueMix</h4>
    </BaseStyledNavLink>
  </StyledLogo>
);

const Links = (props) => <NavLinkContainer>{buttonLinks}</NavLinkContainer>;

const Menu = (props) => {
  return (
    <GiHamburgerMenuWrapper>
      <ContentMenu navObject={pages} icon={<StyledGiHamburgerMenu />} />
    </GiHamburgerMenuWrapper>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// const CustomSwitch = (
//   <SwitchWrapper>
//     <FormGroup>
//       <FormControlLabel
//         control={
//           <Switch
//             onClick={() => {
//               setIsLightMode(!isLightMode);
//               getMode(!isLightMode);
//             }}
//             size="small"
//           />
//         }
//         label={
//           <Typography style={{ color: "white", fontSize: "0.75rem" }}>
//             Mode
//           </Typography>
//         }
//       />
//     </FormGroup>
//   </SwitchWrapper>
// );
