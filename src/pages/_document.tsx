import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <meta content="#18181D" name="theme-color" media="(prefers-color-scheme: dark)" />
        <meta content="#f4f4f5" name="theme-color" media="(prefers-color-scheme: light)" />
        <meta content="#18181D" name="msapplication-TileColor" />
      </Head>
      <body className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
