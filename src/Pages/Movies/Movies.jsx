import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByName } from '../../Services/services';
import { useSearchParams } from "react-router-dom";

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [params, setParams] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);
  const filmName = searchParams.get("query") ?? "";
  

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };


  if(filmName.length>2 && params.length<1){
    setParams(filmName)
    setInputValue(filmName)
  }
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
    
    // setSearchParams({ name: inputValue })
    setParams(inputValue.trim().toLowerCase());
  };
  const handlerInput = event => {
    setInputValue(event.target.value);
    updateQueryString(event.target.value)
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
            {searchedMovie.map(({id, original_title, poster_path, title}) => {
              return (
                <Link to={`${id}`} key={id}>
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


// import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
// import { SearchBox } from "../components/SearchBox";
// import { getProducts } from "../fakeAPI";

// export const Products = () => {
//   const products = getProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get("name") ?? "";

//   const visibleProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(productName.toLowerCase())
//   );

//   const updateQueryString = (name) => {
//     const nextParams = name !== "" ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <main>
//       <SearchBox value={productName} onChange={updateQueryString} />
//       <ProductList products={visibleProducts} />
//     </main>
//   );
// };
