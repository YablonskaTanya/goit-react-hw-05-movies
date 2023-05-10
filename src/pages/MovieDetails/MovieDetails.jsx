import { getMovieById } from 'Api/FetchMovies';
import { GoBackBtn } from 'components/GoBack/GoBack';
import { Suspense, useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  Link,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_MOVIE_POSTER =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

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
    <main>
      <GoBackBtn onClick={handleGoBack} />
      <div>
        <div className={css.movieDetailsContainer}>
          <div>
            <h1 className={css.movieDetailsTitle}>{movie.title}</h1>
            <img
              className={css.movieDetailsImg}
              src={
                movie.poster_path
                  ? baseUrl + movie.poster_path
                  : DEFAULT_MOVIE_POSTER
              }
              alt={movie.title}
              width="400"
            />
          </div>
          <div className={css.movieOwerview}>
            <div>
              <h2 className={css.movieDetailsSubTotle}>Overview</h2>
              <p className={css.movieDetailsText}>{movie.overview}</p>
            </div>
            <div className={css.movieDetailsLincsList}>
              <Link
                className={css.movieDetailsLincs}
                to="cast"
                state={location.state}
              >
                Cast
              </Link>
              <Link
                className={css.movieDetailsLincs}
                to="reviews"
                state={location.state}
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
