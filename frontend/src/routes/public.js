import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { signed } = store.getState().auth;
  // const signed = true;
  return (
    <Route
      {...rest}
      render={props =>
        signed ? (
          <Redirect
            to={{ pathname: '/dashboard', state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
