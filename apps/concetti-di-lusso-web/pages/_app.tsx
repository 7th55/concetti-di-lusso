import type { AppProps } from 'next/app';
// Redux
import { Provider } from 'react-redux';
import { store } from '/src/app/store/store';
// Components
import Layout from './layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9e3040',
    },
    secondary: {
      main: '#f3f5f6',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
