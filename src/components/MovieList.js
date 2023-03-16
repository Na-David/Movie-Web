import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./MovieList.css";

const MovieList = ({id, img, title, genres, years, rating}) => {
    return (
        <div className="movie">
          <img src={img} alt = {title} className="movie_img"/>
          <div>
            <h2 className="movie_title">
              <Link to ={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className="movie_year">{years}</h3>
            {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
            <ul className="movie_detail">
              {genres.map(g => <li key={g}>{g}</li>)}
              <li className="movie_rating">rating : {rating}/10 </li>
            </ul>
          </div>

        </div>
    )
}

MovieList.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieList;