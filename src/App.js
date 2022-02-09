import "./App.css";
import PageNotFound from "./container/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./container/HomeTemplate/_component/Navbar/navbar";
import Footer from "./container/HomeTemplate/_component/Footer";
import { renderRouteHome } from "./routes";
import Layout from "./container/HomeTemplate/_component/Layout/Layout";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./Utils/CustomTheme";
function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <NavBar />
          <Switch>
            {renderRouteHome()}
            {/* Trang PageNotFound */}
            <Route path="" component={PageNotFound} />
          </Switch>
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
