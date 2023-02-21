import React from "react";

const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{Movie1.Year}</p>
      </div>
      <div>
        <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
