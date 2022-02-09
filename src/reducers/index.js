import { combineReducers } from "redux";
import CarouselReducer from "../container/HomeTemplate/Homepage/Carousel/modules";
import MoviesReducer from "../container/HomeTemplate/Homepage/Movies/Modules";
import DetailMoviesReducer from "../container/HomeTemplate/MoviesDetail/modules/reducer";

const rootReducer = combineReducers({
  CarouselReducer,
  MoviesReducer,
  DetailMoviesReducer,
});

export default rootReducer;
