import styled from "styled-components";

// #121212
//rgba(0, 0, 0, 0.85)
export const SubscribeCard = styled.div`
  background: ${(props) => (props.isLightMode ? "#1876d2" : "#0A2647")};
  display: flex;
  // padding: 0rem 1rem;
  flex-direction: column;
  align-items: center;
  bottom: 0.2rem;
  height: 100%;
  width: auto;
  box-shadow: 0.125rem 0.25rem 0.5rem #888888;
  overflow: hidden;
  border-radius: 20px;
  font-family: Roboto;

  & h1.header {
    color: white;
    font-size: 4vw;

    @media (max-width: 450px) {
      font-size: 1.75rem;
    }
  }

  & p.price {
    color: orange;
    font-size: 3vw;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }

  & button {
    color: ${(props) => (props.isLightMode ? "#1e88e5" : "black")};
  }

  & ul {
    padding: 0rem 0.5rem;
    font-size: 2vw;
    color: white;
    display: flex;
    flex-direction: column;

    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }

  & span {
    font-size: 1.5vw;
    color: white;

    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }
`;

export const SubscribeButton = styled.button`
  position: absolute;
  top: 87.5%;
  border-radius: 20px;
  width: 20vw;
  height: 4vh;
  border: none;
  &: hover {
    background: orange;
    color: white;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SubscribeContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
  // padding: 0rem 0.5rem;
`;

export const CardBlankCanvas = styled.div`
  background: white;
  border-radius: 20px;
  width: 30vw;
  height: 42vw;

  @media (max-width: 450px) {
    width: 16rem;
    height: 22rem;
  }
`;
