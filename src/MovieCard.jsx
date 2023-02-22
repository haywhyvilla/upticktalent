import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <div className="overview">
          <h3>Overview</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          doloribus sapiente beatae excepturi, unde labore quidem ad aliquam
          fugit enim necessitatibus, optio pariatur sit architecto inventore!
          Ipsa commodi veniam accusantium.
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
