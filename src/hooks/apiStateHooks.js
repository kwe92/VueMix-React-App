import React, { useState, useEffect } from "react";
import axios from "axios";
import { dataModel } from "../models/dataModel";

// A Custom Hook to get movies state
// Similar to a Provider on flutter??
const useMoviesState = (pageNumber) => {
  console.log("API KEY", process.env.REACT_APP_API_KEY);
  const api = `https://api.themoviedb.org/3/discover/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&page=${String(pageNumber)}`;
  const [moviesData, SetMoviesData] = useState([]);

  // Movies API call
  const movieCall = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    // console.log("Movie Data", data);
    SetMoviesData(results);
  };
  const result = moviesData.map((movie) =>
    dataModel({
      title: movie.original_title,
      overview: movie.overview,
      date: movie.release_date,
      rating: movie.vote_average,
      votes: movie.vote_count,
      img: movie.poster_path,
      bdimg: movie.backdrop_path,
    })
  );

  const getMovies = () => {
    movieCall();
  };

  useEffect(getMovies, [pageNumber]);
  return [result, SetMoviesData];
};

// TV Shows API Call
const useTvShowsState = (pageNumber) => {
  const api = `https://api.themoviedb.org/3/discover/tv?api_key=${
    process.env.REACT_APP_API_KEY
  }&page=${String(pageNumber)}`;
  const [tvShowsData, SetTvShowsData] = useState([]);

  const tvShow = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results TV", results);
    SetTvShowsData(results);
  };

  const result = tvShowsData.map((tvshow) =>
    dataModel({
      title: tvshow.original_name,
      overview: tvshow.overview,
      date: tvshow.first_air_date,
      rating: tvshow.vote_average,
      votes: tvshow.vote_count,
      img: tvshow.poster_path,
      bdimg: tvshow.backdrop_path,
    })
  );

  const getTvShow = () => {
    tvShow();
  };

  useEffect(getTvShow, [pageNumber]);
  return [result, SetTvShowsData];
};

// Trending API Call
const useTrendingState = (pageNumber) => {
  const api = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`;
  const [trendingData, setTrendingDataState] = useState([]);

  const trending = async () => {
    const data = await axios.get(api);
    const results = data.data.results;
    console.log("Results Trending", results);
    setTrendingDataState(results);
  };

  const result = trendingData.map((trending) =>
    dataModel({
      title: trending.original_title,
      overview: trending.overview,
      date: trending.release_date,
      rating: trending.vote_average,
      votes: trending.vote_count,
      img: trending.poster_path,
      bdimg: trending.backdrop_path,
    })
  );

  const getTrending = () => {
    trending();
  };

  useEffect(getTrending, [pageNumber]);
  return [result, setTrendingDataState];
};

export default useMoviesState;

export { useTvShowsState, useTrendingState };
