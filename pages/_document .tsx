import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import React from "react"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Github RepoStars | Busque repositorios pelo nome de usuário</title>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
