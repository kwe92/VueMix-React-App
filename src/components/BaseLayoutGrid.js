import DetailCard from "./DetailCard";
import { isMatchingTitle } from "./utils/titlematcher";
import {
  StyledWrapper,
  StyledImageDisappear,
  StyledUlCards,
} from "../styles/styled_components/styles";

const BaseLayoutGrid = (props) => {
  // destructure state and setState
  const [data, setDataState] = props.stateParams;
  let filteredData;

  // If props.filterVal is not empty
  if (props.filterVal) {
    filteredData = data.filter((ele) =>
      isMatchingTitle(ele.original_title, props.filterVal)
    );
  } else {
    filteredData = data;
  }

  // Create an array of elements wrapped in <li> tags
  const movieList = filteredData.map((ele) => {
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
              getTitle={props.getTitle}
            ></DetailCard>
          </StyledWrapper>
        </li>
      </div>
    );
  });
  return (
    // TODO: Should be its own styled component

    // TODO: Remove this div?? What was it for?? | it made sense when i put it in
    // <div
    //   style={{
    //     background: props.mode ? "white" : "#121212",
    //     position: "absolute",
    //     height: "100%",
    //     width: "100%",
    //   }}
    // >
    <StyledUlCards mode={props.mode}>{movieList}</StyledUlCards>
    // </div>
  );
};

export default BaseLayoutGrid;
