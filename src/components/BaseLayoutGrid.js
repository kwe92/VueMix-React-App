import DetailCard from "./DetailCard";
import { isMatchingTitle } from "./utils/titlematcher";
import {
  StyledWrapper,
  StyledImageDisappear,
  StyledUlCards,
} from "../styles/styled_components/styles";

const BaseLayoutGrid = (props) => {
  // console.log("From Base Layout", props.stateParams);
  const [data, setDataState] = props.stateParams;
  let filteredData;
  // console.log("Results From useMoviesState", data);

  // If props.filterVal as a string evaluates to truthy
  if (props.filterVal) {
    filteredData = data.filter((ele) => {
      return isMatchingTitle(ele, props.filterVal);
    });
    // console.log("Filtered objects", filteredData);
  } else {
    filteredData = data;
  }

  const movieList = filteredData.map((ele) => {
    // console.log("From BLG: ", data);
    // console.log("From BLG Path: ", ele.backdrop_path);
    return (
      <div style={{ position: "relative" }} key={ele.original_title}>
        <li style={{ listStyleType: "none" }}>
          <StyledWrapper>
            <StyledImageDisappear
              src={`https://image.tmdb.org/t/p/w500/${
                ele.poster_path === null ? ele.backdrop_path : ele.poster_path
              }`}
            />
            <DetailCard
              image={
                ele.backdrop_path === null
                  ? `https://image.tmdb.org/t/p/w500/${ele.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`
              }
              isLightMode={props.mode}
              object={ele}
            ></DetailCard>
            {/* <StyledFaPlay /> */}
          </StyledWrapper>
        </li>
      </div>
    );
  });
  return (
    <div>
      {/* <h1>Movies</h1> */}
      <StyledUlCards>{movieList}</StyledUlCards>
    </div>
  );
};

export default BaseLayoutGrid;
