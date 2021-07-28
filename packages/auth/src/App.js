import React, { PureComponent } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export default ({ history, onSignIn, onSignOut, setGlobalStore }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn
                onSignIn={onSignIn}
                onSignOut={onSignOut}
                setGlobalStore={setGlobalStore}
              />
            </Route>
            <Route path="/auth/signup">
              <SignUp
                onSignIn={onSignIn}
                onSignOut={onSignOut}
                setGlobalStore={setGlobalStore}
              />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
