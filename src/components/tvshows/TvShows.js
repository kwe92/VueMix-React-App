import { useTvShowsState } from "../../hooks/apiStateHooks";
import BaseLayoutGrid from "../base/BaseLayoutGrid";

const TvShows = (props) => {
  const [tvShows, setTvShowsState] = useTvShowsState();
  return (
    <BaseLayoutGrid
      state={[tvShows, setTvShowsState]}
      isLightMode={props.isLightMode}
      filterVal={props.filterVal}
      getTitle={props.getTitle}
    ></BaseLayoutGrid>
  );
};

export default TvShows;
