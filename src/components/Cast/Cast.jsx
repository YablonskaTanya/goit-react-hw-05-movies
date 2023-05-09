import { getCast } from 'Api/FetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              key={actor.id}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt={actor.profile_path}
              loading="lazy"
              width={120}
              height={180}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
