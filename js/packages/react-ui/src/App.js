import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert';
import { RoutesList } from './routes/RoutesList/RoutesList';
import { Loading } from './components/Loading';

function App() {
  return (
    <div className="App">
      <Alert />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<Loading />}>
          <RoutesList />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
