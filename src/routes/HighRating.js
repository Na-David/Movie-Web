import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";


const HighRating = () => {

    const [movies, setMovies] = useState([]);
  
    const getHighRatingMovie = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
    }
  
    useEffect(() => {
      getHighRatingMovie()
    },[])
  
    return (
      <div className="container">

        <div className="movies">
          {movies.map((movie) => (
            <MovieList
              key= {movie.id} 
              id = {movie.id}
              years = {movie.years}
              img = {movie.medium_cover_image}
              title = {movie.title}
              summary = {movie.summary}
              genres = {movie.genres} />))}
        </div>
      </div>
    );
  
}

export default HighRating;