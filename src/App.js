import "./App.css";
import PageNotFound from "./container/PageNotFound";
import AuthPage from "./container/AdminTemplate/AuthPage";
import AddUser from "./container/AdminTemplate/AddUserPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRouteHome, renderRouteAdmin } from "./routes";
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        {renderRouteHome()}
        {renderRouteAdmin()}
        {/* RegisterPage */}
        <Route path="/register" component={AddUser} />

        {/* AuthPage */}
        <Route path="/auth" component={AuthPage} />

        {/* Trang PageNotFound */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
