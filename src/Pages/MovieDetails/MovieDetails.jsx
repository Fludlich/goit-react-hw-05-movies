import { useNavigate } from 'react-router-dom';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../Services/services';
import imgDefault from '../../defaultImg/imgDefault.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const navItem = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

  useEffect(() => {
    getMovieById(movieId)
      .then(response => setMovie([response]))
      .catch(error => console.log(error));
  }, [movieId]);

  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/movies`}>
        {' '}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90px',
            padding: '3px 8px',
          }}
        >
          <AiOutlineArrowLeft /> Go back
        </button>
      </Link>

      {movie &&
        movie.map(
          ({
            id,
            title,
            poster_path,
            release_date,
            vote_average,
            overview,
            genres,
          }) => {
            return (
              <div key={id}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : imgDefault
                  }
                  alt={`${title}`}
                  width="300"
                />
                <h2>
                  {title}
                  {release_date}
                </h2>
                <p>User score: {vote_average}</p>
                <h3>Overviev</h3>
                <p>{overview}</p>
                <h4>Ganres</h4>
                <p>
                  {genres.map(el => {
                    return el.name;
                  })}
                </p>
              </div>
            );
          }
        )}
      <p>Aditional information</p>
      <ul>
        {navItem.map(({ href, text }) => {
          return (
            <Link to={href} key={href} replace>
              {text}
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
