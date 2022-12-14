import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByName } from '../../Services/services';
import { useSearchParams } from 'react-router-dom';
import imgDefault from '../../defaultImg/imgDefault.png';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [params, setParams] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  const filmName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (filmName.length > 2 && params.length < 1) {
      setInputValue(filmName);
    }
  }, [filmName, params.length]);

  useEffect(() => {
    if (params.length > 2) {
      getMovieByName(params)
        .then(response => {
          setSearchedMovie(response.results);
        })
        .catch(error => console.log(error));
    }
  }, [params]);

  const handlerForm = e => {
    e.preventDefault();
    setParams(inputValue.trim().toLowerCase());
  };
  const handlerInput = event => {
    setInputValue(event.target.value);
    updateQueryString(event.target.value);
  };

  return (
    <div>
      <form action="#" onSubmit={handlerForm}>
        <input type="text" onChange={handlerInput} value={inputValue} />
        <button type="submit">Search</button>
      </form>
      {searchedMovie.length > 0 &&
        (searchedMovie.length > 1 ? (
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            {searchedMovie.map(({ id, original_title, poster_path, title }) => {
              return (
                <Link to={`${id}`} key={id}>
                  <div>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500${poster_path}`
                          : imgDefault
                      }
                      alt={`${title}`}
                      width="300"
                    />
                    <h2> {original_title}</h2>
                  </div>
                </Link>
              );
            })}
          </ul>
        ) : (
          <Link to={`${searchedMovie[0].id}`}>
            <img
              src={
                searchedMovie[0].poster_path
                  ? `https://image.tmdb.org/t/p/w500${searchedMovie[0].poster_path}`
                  : imgDefault
              }
              alt={`${searchedMovie[0].title}`}
              width="300"
            />
            <h2> {searchedMovie[0].original_title}</h2>
          </Link>
        ))}

      <Outlet />
    </div>
  );
}
