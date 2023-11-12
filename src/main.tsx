import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme.ts';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import { Root } from './routes/Root.tsx';
import { Home } from './routes/Home.tsx';
import { ErrorPage } from './routes/ErrorPage.tsx';
import { Messages } from './routes/Messages.tsx';
import { Calendar } from './routes/Calendar.tsx';
import { Calls } from './routes/Calls.tsx';
import { Contacts } from './routes/Contacts.tsx';
import { Settings } from './routes/Settings.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/calls",
        element: <Calls />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
