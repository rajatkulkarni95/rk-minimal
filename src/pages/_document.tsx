import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/img/favicon.ico" rel="shortcut icon" />
        <link href="/img/meta/site.webmanifest" rel="manifest" />
        <link
          href="/img/meta/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/img/meta/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/img/meta/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta content="#18181D" name="theme-color" />
        <meta content="#18181D" name="msapplication-TileColor" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
