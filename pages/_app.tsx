import React from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import FormContext from "context/FormContext"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #2d2d2d;
    color: #fff;
    font-family: 'Noto Sans', sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Busque repositorios pelo nome de usuário" />
        <meta
          property="og:title"
          content="Github RepoStars | Busque repositorios pelo nome de usuário"
        />
        <meta property="og:description" content="Busque repositorios pelo nome de usuário" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github-repositories-by-username.vercel.app/" />
        <meta property="og:site_name" content="Github RepoStars" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FormContext>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </FormContext>
    </>
  )
}
export default MyApp
