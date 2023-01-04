import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { HiDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const borderRadius = 0.25;
// TODO: Maybe add the light mode back in
export const AppBar = styled.div`
  height: 6.5rem;

  background-color: black;

  position: relative;

  display: flex;

  justify-content: space-between;

  // justify-content: center;

  align-items: center;

  box-shadow: 1px 2px 4px #121212;
`;

export const StyledLogo = styled.div`
  white-space: nowrap;

  color: white;

  padding-left: 2rem;

  h4 {
    text-size-adjust: 10%;
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    h4 {
      text-size-adjust: 10%;
      font-size: 3rem;
    }
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;

  gap: 2.5rem;

  // padding-left: 2rem;

  // padding-right: 2rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const BaseStyledNavLink = styled(NavLink)`
  font-size: 1.25rem;

  text-decoration: none;

  font-family: Roboto;

  color: white;
`;

export const StyledNavLink = styled(BaseStyledNavLink)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &: hover {
    color: orange;
  }
`;

const baseIcon = css`
  color: white;

  font-size: 2rem;

  padding-right: 1rem;

  @media (max-width: 325px) {
    padding-left: 1rem;
  }

  @media (max-width: 450px) {
    padding-right: 0rem;
  }
`;

export const StyledAccountCircle = styled(AccountCircle)`
  ${baseIcon}
`;

export const StyledHiDotsVertical = styled(HiDotsVertical)`
  ${baseIcon}
`;

export const GiHamburgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 750px) {
    padding-left: 1rem;
    display: inline;
  }
  @media (max-width: 450px) {
    padding-left: 0.5rem;
  }
`;
export const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  color: white;

  font-size: 2rem;

  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;

export const SwitchWrapper = styled.div`
  padding-left: 2rem;

  @media (max-width: 450px) {
    display: none;
  }
`;
