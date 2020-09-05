import React from "react";
import { Header } from "./commonFiles/Header";
import CardItem from "./CardList/CardItem";
import AuthPage from "../pages/AuthPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/cards" component={CardItem} />
      </Switch>
    </Router>
  );
};

export default App;
