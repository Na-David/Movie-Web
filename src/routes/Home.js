import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import './Home.css';


const Home = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies()
    },[])
  
    return (
      <div className="container">
        {loading ? <span>Loading...</span> : 
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key= {movie.id} 
              id = {movie.id}
              years = {movie.years}
              img = {movie.medium_cover_image}
              title = {movie.title}
              summary = {movie.summary}
              genres = {movie.genres} />))}
        </div>}
      </div>
    );
  
}

export default Home;