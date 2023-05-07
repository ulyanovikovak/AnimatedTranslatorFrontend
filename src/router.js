import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import AuthController from "./pages/authConroller";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route
          path="/"
          component={(props) => (
            <AuthController {...props}>
              <Route path="/" component={Home} exact />
            </AuthController>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;