import { useTvShowsState } from "../Hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const TvShows = (props) => {
  const [tvShows, setTvShowsState] = useTvShowsState();

  return (
    <BaseLayoutGrid
      stateParams={[tvShows, setTvShowsState]}
      mode={props.mode}
    ></BaseLayoutGrid>
  );
};

export default TvShows;
