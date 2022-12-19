import React from "react";
import useMoviesState from "../hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const Movies = (props) => {
  const [movies, setMoviesState] = useMoviesState();
  return (
    <BaseLayoutGrid
      stateParams={[movies, setMoviesState]}
      mode={props.mode}
      filterVal={props.filterVal}
      getTitle={props.getTitle}
    ></BaseLayoutGrid>
  );
};

export default Movies;
