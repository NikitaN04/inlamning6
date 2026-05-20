import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import SortButtons from "./components/SortButtons";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {

    setMovies([...movies, movie]);
  
  }

  function deleteMovie(id) {

    const updatedMovies = movies.filter(
      (movie) => movie.id !== id
    );

    setMovies(updatedMovies);

  }

  function sortByTitle() {
    const sorted = [...movies];

    sorted.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    });

    setMovies(sorted);
  }

  function sortByRating() {
    const sorted = [...movies];

    sorted.sort((a, b) => {
      return b.rating - a.rating;
    });

    setMovies(sorted);
  }


  return (
    <div className="container mt-5">
      <h1 className="mb-4">Min filmlista</h1>

      <AddMovieForm onAddMovie={addMovie} />

      <MovieList
        movies={movies}
        onDeleteMovie={deleteMovie}/>

      <SortButtons
        onSortByTitle={sortByTitle}
        onSortByRating={sortByRating}/>
  

    </div>
  );
}

export default App;