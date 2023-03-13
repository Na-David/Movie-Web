import PropTypes from "prop-types";

const Movie = ({img, title, summary, genres}) => {
    return (
        <div>
          <img src={img} alt = {title}/>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
          </ul>
        </div>
    )
}

Movie.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;