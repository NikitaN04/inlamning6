import star from "../assets/star.png";
import deleteIcon from "../assets/delete.png";

function Movie({ movie, onDeleteMovie }) {
  let stars = [];

  for (let i = 0; i < movie.rating; i++) {
    stars.push(
      <img key={i} src={star} alt="star" width="25" />
    );
  }

  return (
    <li className="list-group-item">
      {movie.title}
      {stars}

      <img src={deleteIcon} alt="delete" width="25" onClick={() =>  onDeleteMovie(movie.id)}/>
    </li>
  );
}

export default Movie;