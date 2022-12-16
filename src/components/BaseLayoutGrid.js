import DetailCard from "./DetailCard";
import { FaPlay } from "react-icons/fa";
// import styled from "styled-components";
// import { AiFillPlayCircle } from "react-icons/ai";

import {
  StyledWrapper,
  StyledImageDisappear,
  StyledFaPlay,
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
        <li style={{ listStyleType: "none", bottom: 0, padding: 0, margin: 0 }}>
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
              title={ele.title}
              overview={ele.overview}
              releaseDate={ele.release_date}
              rating={ele.vote_average}
              isLightMode={props.mode}
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
