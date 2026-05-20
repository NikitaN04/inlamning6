import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import SortButtons from "./components/SortButtons";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container mt-5">

      <h1 className="mb-4">
        Min filmlista
      </h1>

      <AddMovieForm />

        <h1>Min filmlista</h1>
        <form id="add-movie-form">
            <fieldset>
                <legend>Lägg till en film</legend>

                <label for="title-field">Titel:</label>
                <input type="text" id="title-field" class="form-control">

                <label for="rating-field">Betyg:</label>

                <select type="text" id="rating-field" class="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" class="btn btn-success mt-3" value="Spara film">

            </fieldset>
        </form>

        <hr>

        <h2>Filmer</h2>

        <ul id="movies">

        </ul>

      <MovieList />

      <SortButtons />

    </div>
  );
}

export default App;