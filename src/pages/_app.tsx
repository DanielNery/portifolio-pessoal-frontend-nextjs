import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import ToastNotificationContainer from '../components/ToastContainer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastNotificationContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
