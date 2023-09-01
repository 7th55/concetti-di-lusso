import type { AppProps } from 'next/app';
import { ColorScheme, MantineProvider } from '@mantine/core';
// Redux
import { Provider } from 'react-redux';
import { persistor, store } from '/src/app/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from './layout';
// TODO: Вынести в хук
import { useEffect, useRef, useState } from 'react';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App({ Component, pageProps }: AppProps) {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  // // Вынести в хук
  // const ref = useRef(new Set<any>());
  // useEffect(() => {
  //   let pressed = ref.current;
  //   function runOnKeys(func: any, ...codes: Array<string>) {
  //     const keyDownHandler = (e: KeyboardEvent) => {
  //       e.code === 'ControlLeft' || (e.code === 'KeyJ' && e.preventDefault());

  //       pressed.add(e.code);

  //       const order = Array.from(pressed.keys());

  //       if (order[0] === codes[0]) {
  //         if (!pressed.has(codes[1])) {
  //           return;
  //         }
  //       } else {
  //         return;
  //       }

  //       func();
  //       document.removeEventListener('keydown', keyDownHandler);
  //       document.removeEventListener('keyup', keyUpHandler);
  //     };

  //     const keyUpHandler = (e: KeyboardEvent) => {
  //       e.preventDefault();
  //       pressed.delete(e.code);
  //     };

  //     document.addEventListener('keydown', keyDownHandler);
  //     document.addEventListener('keyup', keyUpHandler);
  //   }

  //   const switchTheme = () =>
  //     colorScheme === 'light'
  //       ? setColorScheme('dark')
  //       : setColorScheme('light');

  //   runOnKeys(switchTheme, 'ControlLeft', 'KeyJ');
  // }, [colorScheme]);

  //
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
          withNormalizeCSS
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
                '#656565',
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
