import React, { useState, useEffect } from "react";
import axios from "axios";
import apikey from "../private/apikey/key";
import { dataModel } from "../models/dataModel";

// A Custom Hook to get movies state
// Similar to a Provider on flutter??
const useMoviesState = () => {
  const api = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`;
  const [moviesData, SetMoviesData] = useState([]);

  // Movies API call
  const movieCall = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    // console.log("Movie Data", data);
    SetMoviesData(results);
  };
  const result = moviesData.map((movie) =>
    dataModel(
      movie.original_title,
      movie.overview,
      movie.release_date,
      movie.vote_average,
      movie.vote_count,
      movie.poster_path,
      movie.backdrop_path
    )
  );

  const getMovies = () => {
    movieCall();
  };

  useEffect(getMovies, []);
  //todo: add secondary poster
  return [result, SetMoviesData];
};

// TV Shows API Call
const useTvShowsState = () => {
  const api = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}`;
  const [tvShowsData, SetTvShowsData] = useState([]);

  const tvShow = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results TV", results);
    SetTvShowsData(results);
  };

  const result = tvShowsData.map((tvshow) =>
    dataModel(
      tvshow.original_name,
      tvshow.overview,
      tvshow.first_air_date,
      tvshow.vote_average,
      tvshow.vote_count,
      tvshow.poster_path,
      tvshow.backdrop_path
    )
  );

  const getTvShow = () => {
    tvShow();
  };

  useEffect(getTvShow, []);
  return [result, SetTvShowsData];
};

// Trending API Call
// TV Shows API Call
const useTrendingState = () => {
  const api = `https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}`;
  const [trendingData, setTrendingDataState] = useState([]);

  const trending = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results Trending", results);
    setTrendingDataState(results);
  };

  const result = trendingData.map((trending) =>
    dataModel(
      trending.original_title,
      trending.overview,
      trending.release_date,
      trending.vote_average,
      trending.vote_count,
      trending.poster_path,
      trending.backdrop_path
    )
  );

  const getTrending = () => {
    trending();
  };

  useEffect(getTrending, []);
  return [result, setTrendingDataState];
};

export default useMoviesState;

export { useTvShowsState, useTrendingState };
