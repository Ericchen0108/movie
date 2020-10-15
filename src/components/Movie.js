import React from 'react';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={poster_path ? (IMGPATH + poster_path) : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"} alt={title}></img>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>

)
  
  export default Movie;
  