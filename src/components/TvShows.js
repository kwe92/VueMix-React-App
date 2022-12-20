import { useTvShowsState } from "../hooks/apiStateHooks";
import BaseLayoutGrid from "./BaseLayoutGrid";

const TvShows = (props) => {
  const [tvShows, setTvShowsState] = useTvShowsState();
  return (
    <BaseLayoutGrid
      stateParams={[tvShows, setTvShowsState]}
      mode={props.mode}
      filterVal={props.filterVal}
      getTitle={props.getTitle}
    ></BaseLayoutGrid>
  );
};

export default TvShows;
