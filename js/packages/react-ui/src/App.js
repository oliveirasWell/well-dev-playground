import React, { Suspense } from 'react';
import { RoutesList } from './routes/RoutesList/RoutesList';
import { Loading } from './components/Loading';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Suspense fallback={<Loading />}>
        <RoutesList />
      </Suspense>
    </header>
  </div>
);

export default App;
