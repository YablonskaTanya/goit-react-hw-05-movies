import { getMoviesByQuery } from 'Api/FetchMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="movie"
            placeholder="Enter the movie..."
            onChange={handleChange}
            value={query}
          />
          <button type="submit">Search movie</button>
        </form>
      </div>
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
