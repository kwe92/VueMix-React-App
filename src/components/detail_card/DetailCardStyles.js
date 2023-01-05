import styled from "styled-components";

//TODO: Remove inline styles into styled components
const CardContentImage = styled.img`
  height: 18vw;
  width: 30vw;

  @media (max-width: 800px) {
    width: 18rem;
    height: 12rem;
  }

  @media (max-width: 450px) {
    height: 8rem;
    width: 12rem;
  }

  @media (max-width: 400px) {
    height: 12rem;
    width: 18rem;
  }

  @media (max-width: 300px) {
    height: 10rem;
    width: 16rem;
  }
`;

const CardContentInfo = styled.div`
  padding: 0rem 1rem;
  text-align: center;
`;

const CardContentTitle = styled.h2`
  color: ${(props) => (props.isLightMode ? "black" : "white")};
  font-family: Roboto;
`;

const CardContentDate = styled.p`
  color: ${(props) => (props.isLightMode ? "black" : "white")};
  margin: 0rem 0rem 0.25rem 0rem;
  font-family: Roboto;
`;

const CardContentRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
`;

const CardContentP = styled.p`
  padding-right: 0.25rem;
  margin: 0;
  color: ${(props) => (props.isLightMode ? "black" : "white")};
  font-family: Roboto;
`;

const CardContentP2 = styled(CardContentP)`
  padding: 0rem 1rem 0.5rem;

  margin-top: 1rem;

  font-family: Roboto;
`;

const UlStarsRow = styled.ul`
  display: flex;
  padding: 0rem 0rem 0rem 0.25rem;
  margin: 0;
  list-style: none;
  gap: 0.2rem;
`;

export {
  CardContentImage,
  CardContentInfo,
  CardContentTitle,
  CardContentDate,
  CardContentRating,
  CardContentP,
  CardContentP2,
  UlStarsRow,
};
