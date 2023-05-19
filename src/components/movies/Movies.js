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
// TODO: Make Responsive to smaller devices

const PageButtonContainer = styled.div`
  display: flex;
  width: 45%;
  padding: 2rem 0 2rem 0;
  background-color: grey;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
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

const GapW = ({ width }) => <div style={{ width: `${width}px` }}></div>;
const GapH = ({ height }) => <div style={{ height: `${height}px` }}></div>;

export default Movies;
