import React from "react";
import { useTrendingState } from "../hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const Trends = (props) => {
  const [trendingData, setTrendingState] = useTrendingState();

  return (
    <BaseLayoutGrid
      state={[trendingData, setTrendingState]}
      isLightMode={props.isLightMode}
      filterVal={props.filterVal}
      getTitle={props.getTitle}
    ></BaseLayoutGrid>
  );
};

export default Trends;
