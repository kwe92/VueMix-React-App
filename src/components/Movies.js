import React, { Fragment, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import DetailCard from "./DetailCard";
import { FaPlay } from "react-icons/fa";
import useMoviesState from "../Hooks/apiStateHooks";
import styled from "styled-components";
//TODO: Make hover effect work for detail card
//TODO: Add comments to named components and refactor to keep code dry
//TODO: Refactor hooks into custom hooks

// const StyledAiFillPlayCircle = styled(AiFillPlayCircle)`
//   color: red;
//   position: absolute;
//   bottom: 50%;
//   left: 50%;
// `;

const StyledImage = styled.img`
  display: block;
  width: 30vw;
  height: 42vw;
  border-radius: 20px;
`;

// Needed to add hover effect
const StyledWrapper = styled.div`
  display: inline;
  padding: 0;
  margin: 0;
  bottom: 0;
`;

const StyledFaPlay = styled(FaPlay)`
  color: white;
  position: absolute;
  bottom: 50%;
  left: 50%;
  font-size: 3rem;
  display: none;
  ${StyledWrapper}:hover & {
    display: block;
  }
`;

const StyledDetailCard = styled(DetailCard)`
  display: none;
  ${StyledWrapper}:hover & {
    display: block;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
`;

const StyledDivOverlay = styled.div`
  // background-image: url(${(props) => props.src});
  background-color: blue;
  width: 30vw;
  height: 42vw;
  border-radius: 20px;
  background-size: cover;
  &:hover {
    background-color: red;
  }
`;

const Movies = (props) => {
  const [movies, setMoviesState] = useMoviesState();

  console.log("Results From useMoviesState", movies);

  const movieList = movies.map((movie) => (
    <div style={{ position: "relative" }}>
      <li style={{ listStyleType: "none", bottom: 0, padding: 0, margin: 0 }}>
        <StyledWrapper>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          {/* <StyledDetailCard
            image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            title={movie.title}
            overview={movie.overview}
          ></StyledDetailCard> */}
          <StyledFaPlay />
        </StyledWrapper>
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

export default Movies;
