import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

// Needed to add hover effect
const StyledWrapper = styled.div`
  display: inline;
  padding: 0;
  margin: 0;
  bottom: 0;
`;

const StyledImageDisappear = styled.img`
  display: block;
  width: 30vw;
  height: 42vw;
  border-radius: 20px;
  transition: opacity 1s ease-in-out;
  ${StyledWrapper}:hover & {
    opacity: 0;
  }
`;
const StyledFaPlay = styled(FaPlay)`
  color: white;
  position: absolute;
  bottom: 50%;
  left: 50%;
  font-size: 3rem;
  display: none;
  ${StyledWrapper}:hover & {
    display: block;
  }
`;

const StyledUlCards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
`;

const StyledCard = styled.div`
  position: absolute;
  bottom: 0.20rem;
  max-height: 42vw;
  max-width: 30vw;
  height: 42vw;
  max-width: 30vw;
  box-shadow: 2px 6px 8px #888888;
  overflow: scroll;
  border-radius: 20px;
  // display: none;
  transition: opacity 1s ease-in-out;
  opacity: 0;

  ${StyledWrapper}:hover & {
    // display: block;
  opacity: 1;
`;

export {
  StyledWrapper,
  StyledImageDisappear,
  StyledFaPlay,
  StyledUlCards,
  StyledCard,
};
