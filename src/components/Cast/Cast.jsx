import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  console.log(movieId);

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cc9feb50eaf7ec71b368044a87f5f06b`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`we cant find any photo by `));
      })
      .then(data => {
        console.log(data);

        setCast(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(cast);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(el => {
          return (
            <li key={el.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={`${el.original_name}`}
                width="300"
              />
              <h2>{el.name}</h2>
              <p>Character: {el.character}</p>
            </li>
          );
        })}
    </ul>
  );
}
