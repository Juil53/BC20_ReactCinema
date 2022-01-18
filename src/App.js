import "./App.css";
import HomePage from "./container/HomeTemplate/Homepage";
import ListMoviePage from "./container/HomeTemplate/ListMovie";
import BookingPage from "./container/HomeTemplate/Booking";
import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarHome from "./container/HomeTemplate/_component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarHome />
      <Switch>
        {/* Trang HomePage */}
        <Route exact path="/" component={HomePage} />
        {/* Trang ListMovie */}
        <Route path="/list-movie" component={ListMoviePage} />
        {/* Trang Booking */}
        <Route path="/booking" component={BookingPage} />

        {/* Trang PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
