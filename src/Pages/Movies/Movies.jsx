import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByName } from '../../Services/services'
 
export function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    if(query.length>2){
      getMovieByName(query).then(response=>{setSearchedMovie(response.results)}).catch(error => console.log(error));
    }
    // console.log(query);
    // if(query.length>2){
    // fetch(
    //   ` https://api.themoviedb.org/3/search/movie?api_key=cc9feb50eaf7ec71b368044a87f5f06b&language=en-US&query=${query}&page=1&include_adult=false`
    // )
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     return Promise.reject(new Error(`we cant find any photo by `));
    //   })
    //   .then(data => {
    //     setSearchedMovie(data.results);
    //   })
    //   .catch(error => console.log(error));
    // }
  }, [query]);


  const handlerForm = (e) => {
    e.preventDefault();

    setQuery(inputValue.trim().toLowerCase());
  };
  const handlerInput = event => {
    setInputValue(event.target.value);
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
            {searchedMovie.map(el => {
              return (
                <Link to={`${el.id}`} key={el.id}>
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
            })}
          </ul>
        ) : (
          <Link to={`${searchedMovie[0].id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${searchedMovie[0].poster_path}`}
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

// // import { Loader } from 'components/Loader/Loader';
// // import MovieCard from 'components/MovieCard/MovieCard';
// // import { NotFound } from 'components/NotFound/NotFound';
// // import { Searchbar } from 'components/Searchbar/Searchbar';
//  import { useFetch } from 'hooks/useFetch';
// import { useCallback, useRef } from 'react';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMovieByQuery } from 'services/api';
// import { Gallery, Container } from './Movies.styled';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   // const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';
//   const page = searchParams.get('page') ?? 1;
//   const galleryRef = useRef();

//   console.log(getMovies)

//   const getMovies = useCallback(params => {
//     getMovieByQuery(params)
//       .then(resMovies => {
//         if (resMovies.results.length === 0) {
//           setError('Nothing found');
//         }
//         if (resMovies.page !== 1) {
//           setMovies(prev => [...prev, ...resMovies.results]);
//         } else {
//           setMovies(resMovies.results);
//           // setTotalPages(resMovies.total_pages);
//         }
//       })
//       .catch(error => setError(error.message))
//       .finally(setLoading(false));
//   }, []);

//   const [fetchData, isLoading, isError] = useFetch(getMovies);

//   useEffect(() => {
//     if (movies.length > 0) {
//       if (galleryRef.current) {
//         window.scrollTo({
//           top: galleryRef.current.getBoundingClientRect().height + 100,
//           left: 100,
//           behavior: 'smooth',
//         });
//       }
//     }
//   }, [movies]);

//   useEffect(() => {
//     if (query !== '') {
//       setLoading(true);
//       fetchData({ query, page });
//     } else {
//       setMovies([]);
//       setError('');
//       // setTotalPages(1);
//     }
//   }, [fetchData, query, page]);

// //   if (isLoading || loading) {
// //     return <Loader />;
// //   }
// //   if (isError) {
// //     return <NotFound text="An error occturred, please try again" />;
// //   }

//   // const onLoadMore = () => {
//   //   setSearchParams({ page: +page + 1, query });
//   // };

//   // const isShowBtn = page < totalPages;

//   return (
//     <Container>
//       <Searchbar />
//       {movies?.length === 0 && error ? (
//         <NotFound text="Nothing found" />
//       ) : (
//         <>
//           <Gallery ref={galleryRef}>
//             {movies?.map(({ title, id, poster_path }) => (
//               <MovieCard key={id} title={title} id={id} url={poster_path} />
//             ))}
//           </Gallery>
//           {/* {isShowBtn && <Button onClickHandle={onLoadMore}>Load More</Button>} */}
//         </>
//       )}
//     </Container>
//   );
// };
