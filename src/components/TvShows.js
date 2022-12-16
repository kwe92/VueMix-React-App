import React, { Fragment, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import useMoviesState, { useTvShowsState } from "../Hooks/apiStateHooks";
import styled from "styled-components";

//TODO: Move duplicated styled components to their own files and share with pages

const StyledImage = styled.img`
  display: block;
  width: 30vw;
  height: 42vw;
  border-radius: 20px;
`;

// const StyledAiFillPlayCircle = styled(AiFillPlayCircle)`
//   color: red;
//   position: absolute;
//   bottom: 50%;
//   left: 50%;
// `;

const StyledFaPlay = styled(FaPlay)`
  color: white;
  position: absolute;
  bottom: 50%;
  left: 50%;
  font-size: 3rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: red;
`;

const StyledDivOverlay = styled.div`
  background-image: url(${(props) => props.src});
  background-color: blue;
  width: 30vw;
  height: 42vw;
  border-radius: 20px;
  background-size: cover;
  &:hover {
    background-color: red;
  }
`;

const TvShows = (props) => {
  const [movies, setMoviesState] = useTvShowsState();

  console.log("Results From useMoviesState", movies);

  const movieList = movies.map((movie) => (
    <div key={movie.id} style={{ position: "relative" }}>
      <li style={{ listStyleType: "none" }}>
        {/* <StyledImage
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        /> */}
        <StyledDivOverlay
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        ></StyledDivOverlay>
        {/* <div style={{ backgroundColor: "red", width: 100, height: 100 }}></div> */}
        <StyledDiv>
          <StyledFaPlay />
        </StyledDiv>
        {/* <div>{movie.original_title}</div> */}
      </li>
    </div>
  ));
  return (
    <div>
      {/* <h1>Movies</h1> */}
      <StyledUl>{movieList}</StyledUl>
    </div>
  );
};

export default TvShows;
