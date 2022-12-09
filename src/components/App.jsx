import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Loyaut/Loyaut';

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);
const Movies = lazy(() =>
  import('../Pages/Movies/Movies').then(module => ({
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../Pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);

const Home = lazy(() =>
  import('../../src/Pages/Home/Home').then(module => ({
    default: module.Home,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
