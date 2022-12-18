import React from "react";
import { StyledCard } from "../styles/styled_components/styles";
import { AiFillStar } from "react-icons/ai";
import {
  StyledCardContentImage,
  StyledCardContentInfo,
  StyledCardContentTitle,
  StyledCardContentDate,
  StyledCardContentRating,
  StyledCardContentP,
  StyledCardContentP2,
} from "../styles/styled_components/card_styles/cardStyles";

// TODO: ul tag should be its own styled component
// TODO: Look for inline css to refactor into styled components

const DetailCard = (props) => {
  // Count of stars
  // example;
  //    8.80 / 10 * 5 = 4.4 floored to the value of 4.0 for star cnt
  const getStarCnt = () =>
    Math.floor((parseFloat(props.object.vote_average).toFixed(2) / 10) * 5);

  const round2 = (num) => parseFloat(num).toFixed(2);

  const cntStars = getStarCnt();

  // Create an array of stars
  let stars = [];
  for (let i = 0; i < cntStars; i++) {
    stars.push(
      <li key={i}>
        <AiFillStar
          style={{
            color: "gold",
          }}
        ></AiFillStar>
      </li>
    );
  }

  return (
    <StyledCard>
      <StyledCardContentImage src={props.image} />
      <StyledCardContentInfo>
        <StyledCardContentTitle isLightMode={props.isLightMode}>
          {props.object.original_title}
        </StyledCardContentTitle>
        <StyledCardContentDate isLightMode={props.isLightMode}>
          {props.object.release_date}
        </StyledCardContentDate>
        <StyledCardContentRating>
          <StyledCardContentP isLightMode={props.isLightMode}>
            Rating:
          </StyledCardContentP>

          <StyledCardContentP isLightMode={props.isLightMode}>
            {round2(props.object.vote_average)}
          </StyledCardContentP>
          {/* Star list */}
          <ul
            style={{
              display: "flex",
              padding: "0rem 0rem 0rem 0.5rem",
              margin: 0,
              listStyle: "none",
              gap: "0.25rem",
            }}
          >
            {stars}
          </ul>
        </StyledCardContentRating>
        <StyledCardContentP
          isLightMode={props.isLightMode}
          style={{ paddingTop: "0.5rem" }}
        >
          Votes: {props.object.vote_count}
        </StyledCardContentP>
      </StyledCardContentInfo>
      <StyledCardContentP2 isLightMode={props.isLightMode}>
        {props.object.overview}
      </StyledCardContentP2>
    </StyledCard>
  );
};

export default DetailCard;
