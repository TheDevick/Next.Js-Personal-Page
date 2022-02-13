import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Font = {
    Preconnect: {
        GoogleApis: "https://fonts.googleapis.com",
        GStatic: "https://fonts.gstatic.com"
    },
    href: "https://fonts.googleapis.com/css2?family=Maven+Pro",
    FontFamily: "Maven Pro",
}

const GlobalStyle = createGlobalStyle`
  body, body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${Font.FontFamily};
  }
`

export default function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <link rel="preconnect" href={Font.Preconnect.GoogleApis} />
                <link rel="preconnect" href={Font.Preconnect.GStatic} />
                <link rel="stylesheet" href={Font.href} />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </React.Fragment>
    )
}