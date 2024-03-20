import React from 'react';
import { App } from './App';
import ReactDOM  from 'react-dom/client'
import { RouterProvider, createHashRouter } from "react-router-dom"
import { Home } from './routes/Home';
import  { About } from './routes/About';
import { Root } from './routes/Root';

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/about",
              element: <About />,
          },
      ],
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>
);

