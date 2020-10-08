import React, { useEffect, useState } from "react";
import "./App.css";

import { connect } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App({ store }) {
  const { user, error } = store;
  const [_, toggleRedirect] = useState();
  const history = useHistory();

  useEffect(() => {
    if (user && !error) {
      history.push("/home");
    } else {
      toggleRedirect(false);
    }
  }, [user, history, error]);
  return (
    <Switch>
      <Route
        excat
        path="/login"
        render={() => (user !== null ? <Redirect to="/home" /> : <LoginPage />)}
      />
      <Route
        path="/home"
        render={() => (!user ? <Redirect to="/login" /> : <HomePage />)}
      />
      <Route
        path="/"
        render={() =>
          user === null ? <Redirect to="/login" /> : <Redirect to="/home" />
        }
      />
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  store: state.login,
});

export default connect(mapStateToProps, null)(App);
