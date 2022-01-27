import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/main.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Products from "./components/Products.js";
import ContextProvider from "./contexts/ContextProvider.js";
import Dashboard from "./pages/Dashboard.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import PageNotFound from "./pages/PageNotFound.js";
import PlaceOrder from "./pages/PlaceOrder.js";
import Register from "./pages/Register.js";
import PrivateRoute from "./protectedRoute/PrivateRoute.js";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
