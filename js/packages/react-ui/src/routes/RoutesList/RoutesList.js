import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { routes } from '../routes';

export const RoutesList = () => (
  <ErrorBoundary>
    <Switch>
      <Redirect exact from="/" to={routes.HOME.path} />
      {Object.values(routes).map(
        ({ path, exact, title, component: Component }) => (
          <Route key={title} path={path} component={Component} exact={exact} />
        )
      )}
    </Switch>
  </ErrorBoundary>
);
