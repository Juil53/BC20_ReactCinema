import { combineReducers } from "redux";
import CarouselReducer from "../container/HomeTemplate/Homepage/Carousel/modules";
import MoviesReducer from "../container/HomeTemplate/Homepage/Movies/Modules";
import DetailMoviesReducer from "../container/HomeTemplate/MoviesDetail/modules/reducer";
import AuthReducer from "../container/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../container/AdminTemplate/AddUserPage/modules/reducer";

const rootReducer = combineReducers({
  CarouselReducer,
  MoviesReducer,
  DetailMoviesReducer,
  AuthReducer,
  addUserReducer,
});

export default rootReducer;
