import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { Layout } from '../layout'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      <GlobalStyles />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
