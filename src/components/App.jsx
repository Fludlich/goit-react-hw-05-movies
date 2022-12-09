import React, { Suspense, lazy } from 'react';

import { Movies } from 'Pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';

import { Cast } from './Cast/Cast';
import { Home } from '../Pages/Home/Home';
import { Layout } from './Loyaut/Loyaut';
import { MovieDetails } from '../Pages/MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';

// import { PropTypes } from "prop-types";
// import styled from 'styled-components';
// const API_KEY = 'cc9feb50eaf7ec71b368044a87f5f06b';

// const Cast = lazy(() =>
//   import('./Cast/Cast').then(module => ({
//     default: module.Cast,
//   }))
// );
// const Reviews = lazy(() =>
//   import('./Reviews/Reviews').then(module => ({
//     default: module.Reviews,
//   }))
// );
//  const Movies = lazy(() => import('../Pages/Movies/Movies')
// );

// const Movies = lazy(() => import('../Pages/Movies/Movies'));

// const Home = lazy(() =>
//   import('../../src/Pages/Home/Home').then(module => ({
//     default: module.Home,
//   }))
// );

// <Suspense fallback={<div>Loading...</div>}>
// <OtherComponent />
// </Suspense>

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
