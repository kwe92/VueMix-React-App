export const dataModel = (title, overview, date, rating, votes, img, bdimg) => {
  return {
    original_title: title,
    overview: overview,
    release_date: date,
    vote_average: rating,
    vote_count: votes,
    poster_path: img,
    backdrop_path: bdimg,
  };
};
