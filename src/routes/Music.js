import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";



const Home = () => {

    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&genre=music&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
    }
  
    useEffect(() => {
      getMovies()
    },[])
  
    return (
      <div className="container">
        <div>

        </div>
        <div className="movies">
          {movies.map((movie) => (
            <MovieList
              key= {movie.id} 
              id = {movie.id}
              years = {movie.years}
              img = {movie.medium_cover_image}
              title = {movie.title}
              summary = {movie.summary}
              genres = {movie.genres}
              rating = {movie.rating} />))}
        </div>
      </div>
    );
  
}

export default Home;