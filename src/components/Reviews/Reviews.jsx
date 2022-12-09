import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cc9feb50eaf7ec71b368044a87f5f06b`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`we cant find any photo by `));
      })
      .then(data => {

        setReviews(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);


  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(el => {
          return (
            <li key={el.author}>
              <h2>Author:{el.author}</h2>
              <p>{el.content}</p>
            </li>
          );
        })}
    </ul>
  );
}
