import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import LoginPage from "./pages/Login";
import { UserProvider } from "./utils/GlobalState";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
