import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AlertContextProvider } from './context/Alert/AlertContextProvider';

test('renders learn react link', () => {
  const { getByText } = render(
    <AlertContextProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </AlertContextProvider>
  );
  const linkElement = getByText(/Loading/i);

  expect(linkElement).toBeInTheDocument();
});
