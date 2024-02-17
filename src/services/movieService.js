const movies = [];

exports.getAll = () => {
  return movies.slice();
  // return [...movies];
  // return Array.from(movies);
};

exports.create = (movieData) => {
  movies.push(movieData);
};
