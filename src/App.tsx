import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme, useMediaQuery } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './routes/Home';
import { Contacts } from './routes/Contacts';
import { Settings } from './routes/Settings';
import { Calendar } from './routes/Calendar';
import { Calls } from './routes/Calls';
import { ErrorPage } from './routes/ErrorPage';
import { Messages } from './routes/Messages';
import { Root } from './routes/Root';
import React from 'react';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/calls',
        element: <Calls />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
