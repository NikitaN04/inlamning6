function SortButtons({ onSortByTitle, onSortByRating }) {
  return (
    <div className="d-flex gap-2 mt-4">

      <button
        className="btn btn-primary"
        onClick={onSortByTitle}
      >
        Alfabetisk ordning
      </button>

      <button
        className="btn btn-primary"
        onClick={onSortByRating}
      >
        Betygsordning
      </button>

    </div>
  );
}

export default SortButtons;