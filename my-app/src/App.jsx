import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
//import MovieList from "./components/MovieList";
//import SortButtons from "./components/SortButtons";

function App() {
  const [movies, setMovies] = useState([]);


  function addMovie(movie) {
    console.log(movie);
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Min filmlista</h1>

      <AddMovieForm onAddMovie={addMovie} />


    </div>
  );
}

export default App;