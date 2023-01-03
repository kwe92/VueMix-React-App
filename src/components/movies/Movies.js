import React from "react";
import useMoviesState from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";

const Movies = (props) => {
  const [movies, setMoviesState] = useMoviesState();
  return (
    <BaseLayoutGrid
      state={[movies, setMoviesState]}
      isLightMode={props.isLightMode}
      filterVal={props.filterVal}
      getTitle={props.getTitle}
    ></BaseLayoutGrid>
  );
};

export default Movies;
