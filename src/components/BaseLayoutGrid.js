import DetailCard from "./DetailCard";

import {
  StyledWrapper,
  StyledImageDisappear,
  StyledUlCards,
} from "../styles/styled_components/styles";

const BaseLayoutGrid = (props) => {
  console.log("From Base Layout", props.stateParams);
  const [data, setDataState] = props.stateParams;

  //   console.log("Results From useMoviesState", data);

  const movieList = data.map((ele) => {
    console.log("From BLG: ", data);
    console.log("From BLG Path: ", ele.backdrop_path);
    return (
      <div style={{ position: "relative" }}>
        <li style={{ listStyleType: "none" }}>
          <StyledWrapper>
            <StyledImageDisappear
              src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
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
