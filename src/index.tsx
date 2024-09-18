// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Root from './Root';

// TypeScript ensures that `document.getElementById` returns an HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

// Rendering the RouterProvider with the Root router setup
root.render(
  <React.StrictMode>
    <RouterProvider router={Root} />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
