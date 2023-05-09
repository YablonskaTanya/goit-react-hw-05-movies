import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`${baseUrl + movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
