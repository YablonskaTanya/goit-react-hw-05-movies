import { getMovieById } from 'Api/FetchMovies';
import { GoBackBtn } from 'components/GoBack/GoBack';
import { useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  Link,
} from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBackBtn onClick={handleGoBack} />
      <div>
        <h1>{movie.title}</h1>
        <div>
          <div>
            <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
          </div>
          <div>
            <h2>Overview</h2>
            <span>{movie.overview}</span>
          </div>
        </div>
      </div>
      <div>
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
