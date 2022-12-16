import React from "react";
import { useTrendingState } from "../Hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const Trends = (props) => {
  const [trendingData, setTrendingState] = useTrendingState();

  return (
    <BaseLayoutGrid
      stateParams={[trendingData, setTrendingState]}
      mode={props.mode}
    ></BaseLayoutGrid>
  );
};

export default Trends;
