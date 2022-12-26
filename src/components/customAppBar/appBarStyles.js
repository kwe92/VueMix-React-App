import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { HiDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { style } from "@mui/system";

const borderRadius = 0.25;

export const AppBar = styled.div`
  height: 56px;
  background-color: black;
  position: absolute;
  display: flex;
  flex-grow: 1;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 1px 2px 4px grey;
`;

export const StyledLogo = styled.div`
  white-space: nowrap;
  color: white;
  padding-left: 2rem;
  h4 {
    text-size-adjust: 10%;
    font-size: 2.15rem;
  }

  @media (max-width: 870px) {
    flex-grow: 0.5;
  }

  @media (max-width: 650px) {
    padding-left: 0rem;
    padding-right: 1rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 870px) {
    display: none;
  }
`;

export const BaseStyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Roboto;
  color: white;
`;

export const StyledNavLink = styled(BaseStyledNavLink)`
  // font-size: 0.75rem;
  font-size: 0.75rem;

  @media (max-width: 720px) {
    font-size: 0.5rem;
  }

  &: hover {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  position: relative;
  background: white;
  flex-grow: 1;
  border-radius: ${borderRadius * 2 + "rem"};
  width: 12rem;
  @media (max-width: 870px) {
    width: 12rem;
  }
  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: 300px) {
    width: 20%;
  }
`;
export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border-radius: ${borderRadius + "rem"};
  align-items: center;

  // @media (max-width: 950px) {
  //   width: 100%;
  // }

  // @media (max-width: 640px) {
  //   width: 100%;
  // }

  background: rgb(38, 38, 38);
  caret-color: white;
  &: hover {
    background: rgb(64, 64, 64);
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 2px;
  display: block;
  background: transparent;
  // padding: 0.5rem 0.5rem 0.5rem 0rem;
  padding: 6px 6px 6px 0px;

  &: focus {
    border: none;
    // background: rgba(255, 0, 0, 0.1);
    outline: none;
  }
`;

const baseIcon = css`
  color: white;
  font-size: 2rem;
  flex-grow: 0.75;
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
  @media (max-width: 870px) {
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
