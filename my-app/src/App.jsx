import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
//import MovieList from "./components/MovieList";
import SortButtons from "./components/SortButtons";

function App() {
  const [movies, setMovies] = useState([]);


  function addMovie(movie) {
    console.log(movie);
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

      <SortButtons
        onSortByTitle={sortByTitle}
        onSortByRating={sortByRating}
      />


    </div>
  );
}

export default App;