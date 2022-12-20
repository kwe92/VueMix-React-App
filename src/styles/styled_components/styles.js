import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const StyledAppWrapper = styled.div`
  //TODO: Change light mode to a . different color maybe a olive green or soft green
  // this line is needed to cover screen when filtering
  background: ${(props) => (props.mode ? "white" : "#121212")};
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;
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
  background: ${(props) => (props.mode ? "white" : "#121212")};
`;

const StyledCard = styled.div`
  position: absolute;
  bottom: 0.20rem;
  max-height: 42vw;
  max-width: 30vw;
  height: 42vw;
  max-width: 30vw;
  box-shadow: 1px 1px 2px #888888;
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
  StyledAppWrapper,
};
