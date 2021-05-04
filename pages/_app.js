import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core'
import theme from '../src/theme'
import React , { useEffect } from 'react'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import '../src/styles/index.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
