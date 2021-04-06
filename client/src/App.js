import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import UserAuth from './pages/UserAuth';
import Favorites from './pages/Favorites';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/UserAuth">
            <UserAuth />
          </Route>
          <Route exact path="/Favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
