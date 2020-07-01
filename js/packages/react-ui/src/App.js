import React, { Suspense } from 'react';
import { RoutesList } from './routes/RoutesList/RoutesList';
import { Loading } from './components/Loading';

const App = () => (
  <div id="app">
    <Suspense fallback={<Loading id="loading" />}>
      <RoutesList />
    </Suspense>
  </div>
);

export default App;
