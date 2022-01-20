import "./App.css";
import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarHome from "./container/HomeTemplate/_component/Navbar";
import NavBar from "./container/HomeTemplate/_component/Navbar/navbar";
import { renderRouteHome } from "./routes";

function App() {
  return (
    <BrowserRouter>
      {/* <NavbarHome /> */}
      <NavBar/>
      <Switch>
        {renderRouteHome()}

        {/* Trang PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
