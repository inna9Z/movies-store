let movies = [
  {
    id: "1",
    name: "Patriot",
    src: "https://m.media-amazon.com/images/I/518IZVOjisL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: "2",
    name: "Barbie",
    src: "https://m.media-amazon.com/images/I/71BgdzmFDAL.jpg",
  },
  {
    id: "3",
    name: "Troy",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF-3wteC9fSNiCZEekpEByLW4axm4boSGX4JD-mZlgA&s",
  },
  {
    id: "4",
    name: "Harry Potter",
    src: "https://cdn.europosters.eu/image/hp/80594.jpg",
  },
  {
    id: "5",
    name: "Tom & Jerry",
    src: "https://cdn.europosters.eu/image/750/posters/looney-tunes-tom-and-jerry-i12290.jpg",
  },
  {
    id: "6",
    name: "Little mermaid",
    src: "https://www.themoviedb.org/t/p/original/cJbKUdbWcIFDuHhs6uvOfacemc4.jpg",
  },
  {
    id: "7",
    name: "Oppenheimer",
    src: "https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg",
  },
  {
    id: "8",
    name: "Eat Pray Love",
    src: "https://m.media-amazon.com/images/S/pv-target-images/c8d3558dfe682e8a8c5d797623548e1fc85b45a7bc7a6fa25799940012532f53.jpg",
  },
  {
    id: "9",
    name: "Home Alone",
    src: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg",
  },
];

const moviesController = {
  getMovieById: (req, res) => {
    const { id } = req.params;

    const movieExists = movies.find((movie) => movie.id === id);
    if (movieExists) {
      res.render("movie", { movie: movieExists });
    } else {
      res.status(404).json({
        message: `Movie with id ${id} not exist`,
      });
    }
  },

  getMovies: (req, res) => {
    res.render("movies", { movies: movies });
  },

  postMovie: (req, res) => {
    const { name, src } = req.body;
    const newMovie = {
      id: String(movies.length + 1),
      name: name,
      src: src,
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
  },

  putMovie: (req, res) => {
    const { id } = req.params;
    const { name, src } = req.body;
    const movieExists = moviesController.getMovieById(id);
    if (movieExists) {
      movies.forEach((movie, index) => {
        if (movie.id === id) {
          const updatedMovie = {
            id: id,
            name: name,
            src: src,
          };
          movies[index] = updatedMovie;
          res.status(200).json(updatedMovie);
        }
      });
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  },

  deleteMovie: (req, res) => {
    const { id } = req.params;
    const movieExists = moviesController.getMovieById(id);
    if (movieExists) {
      movies = movies.filter((movie) => movie.id !== id);

      res
        .status(200)
        .json({ message: `Movie with id ${id} successfully deleted` });
    } else {
      res.status(404).json({ message: `Movie not found` });
    }
  },
};

export default moviesController;
