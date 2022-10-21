import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
