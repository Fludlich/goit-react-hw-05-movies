import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'Services/services';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);


  useEffect(() => {
    getCast(movieId)
      .then(response => setCast(response.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(({cast_id, profile_path,original_name,name,character}) => {
          return (
            <li key={cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={`${original_name}`}
                width="300"
              />
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}
