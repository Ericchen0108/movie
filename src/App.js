import React, { useEffect, useState } from 'react';
import Movie from './components/Movie'

const OMDB_API="http://www.omdbapi.com/?i=tt3896198&apikey=1c346896"
const APIKEY =  '04c35731a5ee918f014970082a0088b1'
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(APIURL)
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      getMovies(SEARCH+searchTerm)
      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <header class='navebar'>
        <h1>Movie Database</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" className="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
        </form>
        <div className='movie-container'>
          { movies.map((movie) => 
            <Movie key={movie.id} {...movie} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
