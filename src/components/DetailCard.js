import React from "react";
import { AiFillStar } from "react-icons/ai";
import { round, round2 } from "./utils/round";
import * as style from "../styles/styled_components/card_styles/cardStyles";
import { StyledCard } from "../styles/styled_components/styles";

// TODO: Look for inline css to refactor into styled components

const DetailCard = (props) => {
  // Count of stars
  // example;
  //    8.80 / 10 * 5 = 4.4 rounded to the value of 4.0 for star cnt
  const getStarCnt = () =>
    round((parseFloat(props.object.vote_average).toFixed(2) / 10) * 5);

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
    <StyledCard
      // Clickable card
      onClick={() => {
        const title = props.object.original_title;
        props.getTitle(title);
      }}
    >
      <style.StyledCardContentImage src={props.image} />
      <style.StyledCardContentInfo>
        <style.StyledCardContentTitle isLightMode={props.isLightMode}>
          {props.object.original_title}
        </style.StyledCardContentTitle>
        <style.StyledCardContentDate isLightMode={props.isLightMode}>
          {props.object.release_date}
        </style.StyledCardContentDate>
        <style.StyledCardContentRating>
          <style.StyledCardContentP isLightMode={props.isLightMode}>
            Rating:
          </style.StyledCardContentP>

          <style.StyledCardContentP isLightMode={props.isLightMode}>
            {round2(props.object.vote_average)}
          </style.StyledCardContentP>
          {/* Star list */}
          <style.StyledUlStarsRow>{stars}</style.StyledUlStarsRow>
        </style.StyledCardContentRating>
        <style.StyledCardContentP
          isLightMode={props.isLightMode}
          style={{ paddingTop: "0.5rem" }}
        >
          Votes: {props.object.vote_count}
        </style.StyledCardContentP>
      </style.StyledCardContentInfo>
      <style.StyledCardContentP2 isLightMode={props.isLightMode}>
        {props.object.overview}
      </style.StyledCardContentP2>
    </StyledCard>
  );
};

export default DetailCard;
