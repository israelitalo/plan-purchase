import type { AppProps } from 'next/app';
import { PaymentProvider } from '../contexts/PaymentContext';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <PaymentProvider>
        <Component {...pageProps} />
      </PaymentProvider>
    </>
  );
}

export default MyApp;
