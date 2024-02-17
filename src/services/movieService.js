const movies = [
  {
    title: "Jungle Cruise",
    genre: "Adventure",
    director: "Spilberg",
    date: "2022",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: "5",
    description: "aaaaaa",
  },
];

exports.getAll = () => {
  console.log("Retrieving all movies:", movies);
  return movies.slice();
  // return [...movies];
  // return Array.from(movies);
};

exports.create = (movieData) => {
  console.log("Adding new movie:", movieData);
  movies.push(movieData);
};
