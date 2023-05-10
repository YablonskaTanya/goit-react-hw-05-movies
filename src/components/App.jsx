import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// // const Home = lazconst About = lazy(() => import("../pages/About"));y(() => import('../pages/Home'));
// // const Movies = lazy(() => import('../pages/Movies'));
// // const MovieDetails = lazy(() => import('../components/MovieList/MovieList'));
// // const Cast = lazy(() => import('../components/Cast/Cast'));
// // const Reviews = lazy(() => import('./Reviews/Reviews'));
// // const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route path="/" index element={<Home />} />
//           <Route path="movies" element={<Movies />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Route>
//       </Routes>
//     </>
//   );
// };
