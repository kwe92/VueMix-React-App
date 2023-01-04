import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

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

  @media (max-width: 800px) {
    width: 18rem;
    height: 26rem;
  }

  @media (max-width: 450px) {
    width: 12rem;
    height: 16rem;
  }

  @media (max-width: 400px) {
    width: 18rem;
    height: 24rem;
  }

  @media (max-width: 300px) {
    width: 16rem;
    height: 22rem;
  }

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

// TODO: Need to fix top padding
// TODO: background can be taken care of with the body tag and vanilla JS

const StyledUlCards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
  // background: ${(props) => (props.isLightMode ? "white" : "#121212")};
  padding-top: 1rem;
`;

const StyledCard = styled.div`
  position: absolute;

  bottom: 0.20rem;

  height: 42vw;

  width: 30vw;

  box-shadow: 0.125rem 0.25rem 0.5rem #888888;

  overflow: scroll;

  border-radius: 20px;

  transition: opacity 1s ease-in-out;

  opacity: 0;

  @media (max-width: 800px) {
    width: 18rem;
    height: 26rem;
  }

  @media (max-width: 450px) {
    width: 12rem;
    height: 16rem;
  }

  @media (max-width: 400px) {
    width: 18rem;
    height: 24rem;
  }

  @media (max-width: 300px) {
    width: 16rem;
    height: 22rem;
  }

  ${StyledWrapper}:hover & {
  opacity: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
`;

export {
  StyledWrapper,
  StyledImageDisappear,
  StyledFaPlay,
  StyledUlCards,
  StyledCard,
  ContentWrapper,
};
