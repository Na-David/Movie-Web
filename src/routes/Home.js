import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MyButton from "../components/MyButton.js";
import '../App.css';


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState((0));
  
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
    }
  
    useEffect(() => {
      getMovies()
    },[])

    const handlePrev = () => {
      setCurrentMovie(currentMovie === 0 ? movies.length -1 : currentMovie -1);
    }
    
    const handleNext = () => {
      setCurrentMovie(currentMovie === movies.length -1 ? 0 : currentMovie + 1);
    }

  
    return (
      <div className="slider">
        <div className="slider_wrapper" >
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
               />
            </div>))}
        </div>
      </div>
    );
  
}

export default Home;