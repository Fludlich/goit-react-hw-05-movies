
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../Services/services'
export function Home() {
  const [movie, setMovie] = useState([]);
console.log(getPopularMovies)
// https://api.themoviedb.org/3/movie/popular?api_key=$cc9feb50eaf7ec71b368044a87f5f06b&language=en-US&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=cc9feb50eaf7ec71b368044a87f5f06b&language=en-US&page=1`

// const getData = useCallback(() => {
//   getPopularMovies().then(resMovies => {
//     console.log(resMovies)
//     setMovie(resMovies.results);
   
//   });
// });
// console.log(movie)
  useEffect(() => {
     getPopularMovies().then(response=>{setMovie(response.results)}).catch(error=>console.log(Error))
    // fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=cc9feb50eaf7ec71b368044a87f5f06b&language=en-US&page=1`
    // )
      // .then(response => {

      //   console.log(response.json())
      //   if (response.ok) {
      //     return response.json();
      //   }
      //   return Promise.reject(new Error(`we cant find any photo by `));
      // })
      // .then(data => {
      //   setMovie(data.results);
      // });
  }, []);

  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {movie.length > 0 ? (
          movie.map(el => {
            return (
              <Link to={`movies/${el.id}`} key={el.original_title}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={`${el.title}`}
                    width="300"
                  />
                  <h2> {el.original_title}</h2>
                </div>
              </Link>
            );
          })
        ) : (
          <p>We dont have any film, try to reload page</p>
        )}
      </ul>
    </div>
  );
}
