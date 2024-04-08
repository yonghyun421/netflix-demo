import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" className="movie-badge">
            {id}
          </Badge>
        ))}
        <div className="movie-describe">
          <Badge bg="warning">{movie.vote_average}</Badge>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? "under 18" : "over 18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
