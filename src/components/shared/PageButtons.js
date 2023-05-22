import styled from "styled-components";

const PageButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 45%;
  padding: 2rem 0 2rem 0;
  // background-color: grey;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    grid-template-columns: auto;
    grid-gap: 1.65625rem;
  }
`;

const PageButton = styled.button`
  border-radius: 3.125rem;
  width: 16rem;
  height: 4rem;
  border: none;
  background: black;
  color: white;
  box-shadow: 0 0 0.75rem grey;
  &: hover {
    background: orange;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    width: 12rem;
  }
`;

export { PageButtonContainer, PageButton };
