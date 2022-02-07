import HomePage from "../container/HomeTemplate/Homepage";
import ListMoviePage from "../container/HomeTemplate/ListMovie";
import BookingPage from "../container/HomeTemplate/Booking";
import DetailMovie from "../container/HomeTemplate/MoviesDetail";
import HomeTemplate from "../container/HomeTemplate";
import DashboardPage from "../container/AdminTemplate/DashboardPage";
import AddUserPage from "../container/AdminTemplate/AddUserPage";
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

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
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
