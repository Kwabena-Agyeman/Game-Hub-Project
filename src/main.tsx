import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme from './theme';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { GameQueryContextProvider } from './context/GameQueryContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: 3,
      // cacheTime: 300000, //5min
      // staleTime: 10 * 1000, //10s
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: true,
      // refetchOnMount: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <GameQueryContextProvider>
          <RouterProvider router={router} />
        </GameQueryContextProvider>
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
