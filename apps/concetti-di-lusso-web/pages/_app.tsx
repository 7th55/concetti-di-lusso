import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
// Redux
import { Provider } from 'react-redux';
import { persistor, store } from '/src/app/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={'ANIME'} persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}
