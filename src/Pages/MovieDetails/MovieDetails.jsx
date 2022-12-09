import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const navItem = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}?api_key=cc9feb50eaf7ec71b368044a87f5f06b`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`we cant find any photo by `));
      })
      .then(data => {

        setMovie([data]);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      MovieDetails
      {movie &&
        movie.map(movie => {
          return (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title}`}
                width="300"
              />
              <h2>
                {movie.title}
                {movie.release_date}
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overviev</h3>
              <p>{movie.overview}</p>
              <h4>Ganres</h4>
              <p>
                {movie.genres.map(el => {
                  return el.name;
                })}
              </p>
            </div>
          );
        })}
        <p>Aditional information</p>
      <ul>
        {navItem.map(({ href, text }) => {
          return (
            <Link to={href} key={href}>
              {text}
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
