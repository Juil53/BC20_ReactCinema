import { combineReducers} from "redux";
import CarouselReducer from "../container/HomeTemplate/Homepage/Carousel/modules";
import MoviesReducer from "../container/HomeTemplate/Homepage/Movies/Modules";

const rootReducer = combineReducers({
  CarouselReducer,
  MoviesReducer,
  
});

export default rootReducer;
