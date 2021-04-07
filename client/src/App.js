import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserAuth from "./pages/UserAuth";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/signup" component={UserAuth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
