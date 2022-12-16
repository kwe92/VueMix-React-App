import React from "react";
import useMoviesState from "../Hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const Movies = (props) => {
  const [movies, setMoviesState] = useMoviesState();
  return (
    <BaseLayoutGrid
      stateParams={[movies, setMoviesState]}
      mode={props.mode}
    ></BaseLayoutGrid>
  );
};

export default Movies;
