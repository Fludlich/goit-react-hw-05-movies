
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../Services/services'

export function Home() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
     getPopularMovies().then(response=>{setMovie(response.results)}).catch(error=>console.log(Error))
  }, []);

  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {movie.length > 0 ? (
          movie.map(({id, original_title, poster_path, title}) => {
            return (
              <Link to={`movies/${id}`} key={original_title}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`${title}`}
                    width="300"
                  />
                  <h2> {original_title}</h2>
                </div>
              </Link>
            );
          })
        ) : (
          <p>We can't find any film, try to reload page</p>
        )}
      </ul>
    </div>
  );
}
