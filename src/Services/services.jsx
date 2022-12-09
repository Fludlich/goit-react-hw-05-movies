import axios from 'axios';

const API_KEY = 'cc9feb50eaf7ec71b368044a87f5f06b';
const fetchApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'});

export const getPopularMovies = async()=>{
    const {data} = await fetchApi.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1` )
    console.log(data)
    return data
}
// export const getPopularMovies = async () => {
//   const { data } = await fetchApi.get(
//     `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//   );

//   return data;
// };
export const getMovieByName = async (query) => {
    const { data } = await fetchApi.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);
  
    return data;
  };
export const getFullInfoAboutMovie = async movie_id => {
  const { data } = await fetchApi.get(`movie/${movie_id}?api_key=${API_KEY}`);
  return data;
};

export const getActors = async movie_id => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/credits?api_key=${API_KEY}`
  );

  return data;
};
export const getReviews = async movie_id => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/reviews?api_key=${API_KEY}`
  );

  return data;
};