import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AUTH_TOKEN} from '../../constants/loginAuthConst';
import routes from '../../constants/routes';

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
      {...rest}
      render={props =>
        localStorage.getItem(AUTH_TOKEN) ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname: routes.LOGIN}}/>
        )
        }
  />
);