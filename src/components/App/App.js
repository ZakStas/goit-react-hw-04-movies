import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const HomePage = lazy(() =>
  import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "../../pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const MoviesPage = lazy(() =>
  import(
    "../../pages/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);
export default App;