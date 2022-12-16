import React from "react";
import { StyledCard } from "../styles/styled_components/styles";
import { AiFillStar } from "react-icons/ai";

//TODO: Remove inline styles
//TODO: Fix coloring of text by mode
const DetailCard = (props) => (
  <StyledCard>
    <img src={props.image} style={{ height: "18vw", width: "30vw" }} />
    <div style={{ padding: "0rem 1rem", textAlign: "center" }}>
      <h2 style={{ color: props.isLightMode ? "black" : "white" }}>
        {props.title}
      </h2>
      <p
        style={{
          color: props.isLightMode ? "black" : "white",
          margin: "0rem 0rem 0.25rem 0rem",
        }}
      >
        {props.releaseDate}
      </p>
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            paddingRight: "0.25rem",
            margin: 0,
            color: props.isLightMode ? "black" : "white",
          }}
        >
          Rating:
        </p>
        <AiFillStar style={{ color: "gold" }}></AiFillStar>
        <p
          style={{
            paddingLeft: "0.25rem",
            margin: 0,
            color: props.isLightMode ? "black" : "white",
          }}
        >
          {props.rating}
        </p>
      </div>
    </div>

    <div style={{ padding: "0px 1rem 0.5rem" }}>
      <p style={{ color: props.isLightMode ? "black" : "white" }}>
        {props.overview}
      </p>
    </div>
  </StyledCard>
);

export default DetailCard;
