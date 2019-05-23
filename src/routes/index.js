import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import NoMatch from "../screens/404";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
