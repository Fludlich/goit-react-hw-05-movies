import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../Services/services';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({author, content}) => {
          return (
            <li key={author}>
              <h2>Author:{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
}
