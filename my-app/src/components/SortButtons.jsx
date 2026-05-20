function SortButtons({ onSortByTitle, onSortByRating }) {
    return (
      <div className="sort-buttons">
        <button onClick={onSortByTitle}>Alfabetisk ordning</button>
        <button onClick={onSortByRating}>Betygsordning</button>
      </div>
    );
  }
  
  export default SortButtons;