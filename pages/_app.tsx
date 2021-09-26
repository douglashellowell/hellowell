import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './_layout';
import StyledThemeProvider, { ThemeStyles } from 'styles/theme';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </StyledThemeProvider>
  );
}
export default MyApp;
