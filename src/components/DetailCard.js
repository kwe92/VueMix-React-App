import * as React from "react";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: inline;
  padding: 0;
  margin: 0;
  bottom: 0;
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

const StyledDiv = styled.div`
  max-height: 42vw;
  max-width: 30vw;
  box-shadow: 2px 6px 8px #888888;
  overflow: scroll;
  border-radius: 20px;
`;

//TODO: Remove inline styles
const DetailCard = (props) => (
  <StyledDiv>
    <img src={props.image} style={{ height: "22vw", width: "30vw" }}></img>
    <div style={{ padding: "0px 1rem 0.5rem 1rem" }}>
      <h2>{props.title}</h2>
      <p>{props.overview}</p>
    </div>
  </StyledDiv>
);

export default DetailCard;
