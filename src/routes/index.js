import HomePage from "../container/HomeTemplate/Homepage";
import ListMoviePage from "../container/ListMovieTemplate";
import Booking from "../container/BookingTemplate/Booking";
import DetailMovie from "../container/HomeTemplate/MoviesDetail";
import HomeTemplate from "../container/HomeTemplate";
import DashboardPage from "../container/AdminTemplate/DashboardPage";
import AddUser from "../container/AdminTemplate/AddUserPage";
import AdminTemplate from "../container/AdminTemplate";

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

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
];

const renderRouteHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const renderRouteAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome, renderRouteAdmin };
