import React from "react";
import { useTrendingState } from "../hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const Trends = (props) => {
  const [trendingData, setTrendingState] = useTrendingState();

  return (
    <BaseLayoutGrid
      stateParams={[trendingData, setTrendingState]}
      mode={props.mode}
      filterVal={props.filterVal}
    ></BaseLayoutGrid>
  );
};

export default Trends;
