import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from '@/routes/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>
);
