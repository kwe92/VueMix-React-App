import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  font-size: 1.75rem;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 2.5rem;
  padding-left: 2rem;
`;

export const BaseStyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Roboto;
  color: white;
`;

export const StyledNavLink = styled(BaseStyledNavLink)`
  font-size: 0.75rem;
  &: hover {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  margin: 0rem 1rem 0rem 0rem;
  position: relative;
  background: white;
  border-radius: ${borderRadius * 2 + "rem"};
`;
export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border-radius: ${borderRadius + "rem"};
  align-items: center;
  width: 16vw;
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
