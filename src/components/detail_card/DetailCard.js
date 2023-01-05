import React from "react";
import { AiFillStar } from "react-icons/ai";
import { round } from "../utils/round";
import {
  CardContentImage,
  CardContentDate,
  CardContentInfo,
  CardContentP,
  CardContentP2,
  CardContentRating,
  CardContentTitle,
  UlStarsRow,
} from "./DetailCardStyles";
import { StyledCard } from "../../styles/styles";

// TODO: Look for inline css to refactor into styled components

const DetailCard = (props) => {
  // Create an array of stars

  // handles clicking the image or card
  // calls getTitle callback passed from App.js
  const handleClick = () => {
    const title = props.object.original_title;
    props.getTitle(title);
  };

  const cntStars = getStarCnt({ vote_average: props.object.vote_average });

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
      onClick={handleClick}
    >
      <CardImage image={props.image} object={props.object} />
      <CardMiddleSection
        isLightMode={props.isLightMode}
        object={props.object}
        stars={stars}
      />
      <CardText isLightMode={props.isLightMode} object={props.object} />
    </StyledCard>
  );
};

// Count of stars
// example;
//    8.80 / 10 * 5 = 4.4 rounded to the value of 4.0 for star cnt
const getStarCnt = ({ vote_average }) =>
  round((parseFloat(vote_average).toFixed(2) / 10) * 5, 0);

const CardImage = (props) => <CardContentImage src={props.image} />;

const CardMiddleSection = (props) => (
  <CardContentInfo>
    <CardContentTitle isLightMode={props.isLightMode}>
      {props.object.original_title}
    </CardContentTitle>
    <CardContentDate isLightMode={props.isLightMode}>
      {props.object.release_date}
    </CardContentDate>
    <CardContentRating>
      <CardContentP isLightMode={props.isLightMode}>Rating:</CardContentP>

      <CardContentP isLightMode={props.isLightMode}>
        {round(props.object.vote_average, 2)}
      </CardContentP>
      {/* Star list */}
      <UlStarsRow>{props.stars}</UlStarsRow>
    </CardContentRating>
    <CardContentP
      isLightMode={props.isLightMode}
      style={{ paddingTop: "0.5rem" }}
    >
      Votes: {props.object.vote_count}
    </CardContentP>
  </CardContentInfo>
);

const CardText = (props) => (
  <CardContentP2 isLightMode={props.isLightMode}>
    {props.object.overview}
  </CardContentP2>
);

export default DetailCard;
