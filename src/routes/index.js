import HomePage from "../container/HomeTemplate/Homepage";
import ListMoviePage from "../container/HomeTemplate/ListMovie";
import BookingPage from "../container/HomeTemplate/Booking";
import { Route } from "react-router-dom";

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