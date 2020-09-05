import React from "react";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { toGetUserError } from "../selectors/useSelectors";

const AuthLinks = () => (
  <div>
    <h1>Welcome to the AuthPage!</h1>
    <NavLink
      to="/auth/signup"
      activeStyle={{ background: "slategrey", color: "white" }}
    >
      I need to sign up
    </NavLink>
    <NavLink
      to="/auth/login"
      activeStyle={{ background: "slategrey", color: "white" }}
    >
      I need to login
    </NavLink>
  </div>
);

const AuthPage = () => {
  const authError = useSelector(toGetUserError);

  const errorMessage = authError ? <p>{authError.message}</p> : <></>;

  return (
    <Router>
      <Route path="/auth" component={AuthLinks} />
      <Switch>
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
      </Switch>
      {errorMessage}
    </Router>
  );
};

export default AuthPage;
