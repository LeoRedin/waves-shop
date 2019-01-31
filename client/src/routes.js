import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Auth from "./hoc/Auth";
import Home from "./Components/Home";
import RegisterLogin from "./Components/RegisterLogin";
import Register from "./Components/RegisterLogin/Register";
import UserDashboard from "./Components/User";

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route
                    path="/user/dashboard"
                    exact
                    component={Auth(UserDashboard, true)}
                />
                <Route
                    path="/register_login"
                    exact
                    component={Auth(RegisterLogin, false)}
                />
                <Route
                    path="/register"
                    exact
                    component={Auth(Register, false)}
                />
                <Route path="/" exact component={Auth(Home, null)} />
            </Switch>
        </Layout>
    );
};

export default Routes;
