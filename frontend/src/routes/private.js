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
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
