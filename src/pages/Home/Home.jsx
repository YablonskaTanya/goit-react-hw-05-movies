import { getTrendingMovies } from 'Api/FetchMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <main>
      {/* <h2>Trending today</h2> */}
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
