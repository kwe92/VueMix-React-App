import React from "react";
import useMoviesState from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";
import styled from "styled-components";

const Movies = (props) => {
  const [movies, setMoviesState] = useMoviesState();
  return (
    <>
      <BaseLayoutGrid
        state={[movies, setMoviesState]}
        isLightMode={props.isLightMode}
        filterVal={props.filterVal}
        getTitle={props.getTitle}
      ></BaseLayoutGrid>
      <PageButtons />
    </>
  );
};

const PageButtons = ({}) => (
  <PageButtonContainer>
    <PageButton type="button">
      <p>Back</p>
    </PageButton>
    <PageButton type="button">
      <p>Next</p>
    </PageButton>
  </PageButtonContainer>
);

const PageButtonContainer = styled.div`
  display: flex;
  width: 50%;
  height: 14rem;
  background-color: grey;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

const PageButton = styled.button`
  border-radius: 3.125rem;
  width: 16rem;
  height: 4rem;
  border: none;
  &: hover {
    background: orange;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    width: 12rem;
  }
`;

export default Movies;
