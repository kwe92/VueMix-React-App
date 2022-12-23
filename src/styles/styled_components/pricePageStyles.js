import styled from "styled-components";

// #121212

export const SubscribeCard = styled.div`
  background: ${(props) =>
    props.isLightMode ? "#1876d2" : "rgba(0, 0, 0, 0.85)"};
  display: flex;
  // padding: 0rem 1rem;
  flex-direction: column;
  align-items: center;
  bottom: 0.2rem;
  // height: 42vw;
  // width: 30vw;
  height: 100%;
  width: auto;
  box-shadow: 1px 2px 4px #888888;
  overflow: scroll;
  border-radius: 20px;
  font-family: Roboto;

  & h1.header {
    color: white;
    font-size: 4vw;
  }

  & p.price {
    color: orange;
    font-size: 3vw;
    margin: 0;
  }

  // need to make this responsive
  & button {
    color: ${(props) => (props.isLightMode ? "#1e88e5" : "black")};
  }

  & ul {
    padding: 0rem 0.5rem;
    font-size: 2vw;
    color: white;
  }

  & span {
    font-size: 1.5vw;
    color: white;
  }
`;

export const SubscribeButton = styled.button`
  position: absolute;
  top: 85%;
  border-radius: 20px;
  width: 20vw;
  height: 4vh;
  border: none;
  &: hover {
    background: orange;
    color: white;
  }
`;

export const SubscribeContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
  // padding: 0rem 0.5rem;
`;
