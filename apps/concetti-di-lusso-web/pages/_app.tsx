import type { AppProps } from 'next/app';
// Redux
import { Provider } from 'react-redux';
import { store } from '/src/app/store/store';
// Components
import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
