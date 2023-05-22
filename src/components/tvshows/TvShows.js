import React, { useState, Fragment } from "react";
import { useTvShowsState } from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";
import { PageButton, PageButtonContainer } from "../shared/PageButtons";

const TvShows = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [tvShows, setTvShowsState] = useTvShowsState(pageNumber);

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
        state={[tvShows, setTvShowsState]}
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

export default TvShows;
