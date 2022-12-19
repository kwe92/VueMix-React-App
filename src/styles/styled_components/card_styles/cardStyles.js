import styled from "styled-components";

//TODO: Remove inline styles into styled components
const StyledCardContentImage = styled.img`
  height: 18vw;
  width: 30vw;
`;
const StyledCardContentInfo = styled.div`
  padding: 0rem 1rem;
  text-align: center;
`;

const StyledCardContentTitle = styled.h2`
  color: ${(props) => (props.isLightMode ? "black" : "white")};
`;

const StyledCardContentDate = styled.p`
  color: ${(props) => (props.isLightMode ? "black" : "white")};
  margin: 0rem 0rem 0.25rem 0rem;
`;

const StyledCardContentRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCardContentP = styled.p`
  padding-right: 0.25rem;
  margin: 0;
  color: ${(props) => (props.isLightMode ? "black" : "white")};
`;

const StyledCardContentP2 = styled(StyledCardContentP)`
  padding: 0px 1rem 0.5rem;
  margin-top: 1rem;
`;

const StyledUlStarsRow = styled.ul`
  display: flex;
  padding: 0rem 0rem 0rem 0.5rem;
  margin: 0;
  liststyle: none;
  gap: 0.25rem;
`;

export {
  StyledCardContentImage,
  StyledCardContentInfo,
  StyledCardContentTitle,
  StyledCardContentDate,
  StyledCardContentRating,
  StyledCardContentP,
  StyledCardContentP2,
  StyledUlStarsRow,
};
