import React from "react";
import { StyledCard } from "../styles/styled_components/styles";
import { AiFillStar } from "react-icons/ai";
import {
  StyledCardContentImage,
  StyledCardContentRow,
  StyledCardContentTitle,
  StyledCardContentDate,
  StyledCardContentRating,
  StyledCardContentP,
  StyledCardContentP2,
} from "../styles/styled_components/card_styles/cardStyles";

const DetailCard = (props) => {
  return (
    <StyledCard>
      <StyledCardContentImage src={props.image} />
      <StyledCardContentRow>
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
          <AiFillStar
            style={{ color: "gold", paddingRight: "0.25rem" }}
          ></AiFillStar>
          <StyledCardContentP isLightMode={props.isLightMode}>
            {parseFloat(props.object.vote_average).toFixed(2)}
          </StyledCardContentP>
        </StyledCardContentRating>
      </StyledCardContentRow>
      <StyledCardContentP2 isLightMode={props.isLightMode}>
        {props.object.overview}
      </StyledCardContentP2>
    </StyledCard>
  );
};

export default DetailCard;
