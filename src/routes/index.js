import HomePage from "../container/HomeTemplate/Homepage";
import ListMoviePage from "../container/HomeTemplate/ListMovie";
import BookingPage from "../container/HomeTemplate/Booking";
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
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  //Booking,
  {
    exact: false,
    path: "/booking",
    component: BookingPage,
  },
  //Detail Movie
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMovie,
  },
];

// const routesAdmin = [];

const renderRouteHome = () => {
  return routesHome.map((route,index) => {
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

export {renderRouteHome};