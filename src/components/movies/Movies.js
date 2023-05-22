import React, { Fragment, useEffect, useState } from "react";
import useMoviesState from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";
import { PageButton, PageButtonContainer } from "../shared/PageButtons";

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
      />
      <PageButtons nextPage={nextPage} prevPage={prevPage} />
    </Fragment>
  );
};

const PageButtons = ({ nextPage, prevPage }) => (
  <PageButtonContainer>
    <PageButton type="button" onClick={prevPage}>
      <p>Back</p>
    </PageButton>
    <PageButton type="button" onClick={nextPage}>
      <p>Next</p>
    </PageButton>
  </PageButtonContainer>
);

export default Movies;
