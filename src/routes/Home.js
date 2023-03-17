import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MyButton from "../components/MyButton.js";
import MyHeader from "../components/MyHeader";
import '../App.css';


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [romance, setRomance] = useState([]);
    const [music, setMusic] = useState([]);
    const [currentMovie, setCurrentMovie] = useState((0));
  
    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies); 
    }
  
    useEffect(() => {
      getMovies();
    },[])

    const getRomance = () => {
      fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&genre=romance&sort_by=year")
      .then(response => response.json())
      .then(romance => setRomance(romance));
    }

    useEffect(() => {
      getRomance();
    },[])

    const getHighRating = () => {

    }

    const getMusic = () => {

    }


  
    return (
      <div>
        <MyHeader logo={"LOGO"} 
        high_rating={<MyButton text={"High Rating"} onClick={getHighRating}/>}
        romance={<MyButton text={"Romance"} onClick={getRomance} />}
        music={<MyButton text={"Music"} onClick={getMusic}/>}/>
        
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

      </div>

    );
  
}

export default Home;