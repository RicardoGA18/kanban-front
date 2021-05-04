import React from 'react'
import Document, { Html , Head , Main , NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { resetServerContext } from 'react-beautiful-dnd'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  })

  const page = await ctx.renderPage()
  const initialProps = await Document.getInitialProps(ctx)
  resetServerContext()

  return {
    ...initialProps,
    ...page,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}