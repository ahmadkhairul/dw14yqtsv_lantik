import React from "react";
import Index from "./app/index";
import Profile from "./app/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
