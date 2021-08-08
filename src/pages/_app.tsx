import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/globalStyles'
import { theme } from '../../themes/primary'
import Footer from '../components/Footer/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
export default MyApp