import React, { Fragment, useEffect, useState } from "react";
import useMoviesState from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";
import styled from "styled-components";

const Movies = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMoviesState] = useMoviesState(pageNumber);
  const state = [movies, setMoviesState];
  console.log("PAge Number: ", pageNumber);

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber > 1 ? prevPageNumber - 1 : prevPageNumber
    );
  };

  return (
    <Fragment>
      <BaseLayoutGrid
        state={state}
        isLightMode={props.isLightMode}
        filterVal={props.filterVal}
        getTitle={props.getTitle}
      ></BaseLayoutGrid>
      <PageButtons setPage={nextPage} prevPage={prevPage} />
    </Fragment>
  );
};

const PageButtons = ({ setPage, prevPage }) => (
  <PageButtonContainer>
    <PageButton type="button" onClick={prevPage}>
      <p>Back</p>
    </PageButton>
    <PageButton type="button" onClick={setPage}>
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

export default Movies;
