import React from 'react';
import { Switch } from 'react-router-dom';

import Private from './private';
import Public from './public';

import Main from '~/pages/Main';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';

const Routes = () => (
  <Switch>
    <Public path="/" exact component={SignIn} />
    <Public path="/register" component={SignUp} />
    <Private path="/dashboard" component={Main} isPrivate />

    <Public path="/" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
