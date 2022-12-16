import React, { useState, useEffect } from "react";
import axios from "axios";
import apikey from "../private/apikey/key";

// A Custom Hook to get movies state
// Similar to a Provider on flutter??
const useMoviesState = () => {
  const api = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`;
  const [moviesData, SetMoviesData] = useState([]);

  //TODO: Fix
  // Movies API Call
  const movieCall = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results", results);
    SetMoviesData(results);
  };

  const getMovies = () => {
    movieCall();
  };

  useEffect(getMovies, []);
  return [moviesData, SetMoviesData];
};

// TV Shows API Call
const useTvShowsState = () => {
  const api = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}`;
  const [tvShowsData, SetTvShowsData] = useState([]);

  //TODO: Fix
  // Movies call
  const tvShow = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results TV", results);
    SetTvShowsData(results);
  };

  const getTvShow = () => {
    tvShow();
  };

  useEffect(getTvShow, []);
  return [tvShowsData, SetTvShowsData];
};

export default useMoviesState;

export { useTvShowsState };
