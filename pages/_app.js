import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </React.Fragment>
    )
}