import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { routes } from '../routes';

export const RoutesList = () => {
  console.log('routes');
  console.log(routes);
  console.log(Object.values(routes));

  const map = Object.values(routes).map(
    ({ path, exact, title, component: Component }) => {
      console.log(path);

      return (
        // <div key={path}>{path}</div>
        <Route key={title} path={path} component={Component} exact={exact} />
      );
    }
  );

  console.log('map');
  console.log(map);

  return (
    <ErrorBoundary>
      <Switch>
        <Redirect exact from="/" to={routes.HOME.path} />
        {map}
      </Switch>
    </ErrorBoundary>
  );
};
