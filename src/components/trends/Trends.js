import React, { Fragment, useState } from "react";
import { useTrendingState } from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";
import { PageButton, PageButtonContainer } from "../shared/PageButtons";
const Trends = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const [trendingData, setTrendingState] = useTrendingState(pageNumber);

  const nextPage = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const prevPage = () => {
    setPageNumber((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  };

  return (
    <Fragment>
      <BaseLayoutGrid
        state={[trendingData, setTrendingState]}
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

export default Trends;
