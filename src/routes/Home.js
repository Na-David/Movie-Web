import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import '../App.css';


const Home = () => {

    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
    }
  
    useEffect(() => {
      getMovies();
    },[])

    return (
      <div>
        <div className="container">
        <div className="movies" >
          {movies.map((movie, idx) => (
            <div key = {idx} className = "slider_item">
              <MovieList
              key= {movie.id} 
              id = {movie.id}
              years = {movie.years}
              img = {movie.medium_cover_image}
              title = {movie.title}
              genres = {movie.genres}
              rating = {movie.rating}
              summary= {movie.summary}
               />
            </div>))}
        </div>
      </div>
      </div>

    );
  
}

export default Home;