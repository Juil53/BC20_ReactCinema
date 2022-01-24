import "./App.css";
import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./container/HomeTemplate/_component/Navbar/navbar";
import { renderRouteHome } from "./routes";
import Layout from "./container/HomeTemplate/_component/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <NavBar />
        <Switch>
          {renderRouteHome()}
          {/* Trang PageNotFound */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
