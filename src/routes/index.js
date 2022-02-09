import HomePage from "../container/HomeTemplate/Homepage";
import ListMoviePage from "../container/ListMovieTemplate";
import Booking from "../container/BookingTemplate/Booking";
import { Route } from "react-router-dom";
import DetailMovie from "../container/HomeTemplate/MoviesDetail";

const routesHome = [
  //Home
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  //ListMovie
  {
    exact: true,
    path: "/movies",
    component: ListMoviePage,
  },
  //Booking,
  {
    exact: false,
    path: "/booking",
    component: Booking,
  },
  //Detail Movie
  {
    exact: false,
    path: "/movies/:id",
    component: DetailMovie,
  },
];

// const routesAdmin = [];

const renderRouteHome = () => {
  return routesHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome };
