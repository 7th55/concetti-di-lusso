import { Hind_Siliguri } from 'next/font/google';
import type { AppProps } from 'next/app';
import { ColorScheme, MantineProvider } from '@mantine/core';
// Redux
import { Provider } from 'react-redux';
import { persistor, store } from '/src/app/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from './layout';
// Hooks
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <Provider store={store}>
      <PersistGate loading={'ANIME'} persistor={persistor}>
        <MantineProvider
          withCSSVariables
          withGlobalStyles
          // withNormalizeCSS
          theme={{
            colorScheme,
            colors: {
              maroon: [
                '#f5eaec',
                '#ecd6d9',
                '#e2c1c6',
                '#d8acb3',
                '#cf98a0',
                '#c5838c',
                '#bb6e79',
                '#b15966',
                '#a84553',
                '#9e3040',
              ],
              raisinBlack: [
                '#e9e9e9',
                '#d3d3d3',
                '#bdbdbd',
                '#a7a7a7',
                '#919191',
                '#7b7b7b',
                '#696969',
                '#4f4f4f',
                '#393939',
                '#232323',
              ],
              cultured: [
                '#ffffff',
                '#fdfdfd',
                '#fbfcfc',
                '#fafbfb',
                '#f9fafb',
                '#f8f9fa',
                '#f7f8f9',
                '#f6f6f6',
                '#f4f6f7',
                '#f3f5f6',
              ],
            },
            primaryColor: 'maroon',
            primaryShade: { light: 9, dark: 9 },
            fontFamily: 'Hind Siliguri, sans-serif',
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}
