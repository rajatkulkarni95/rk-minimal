import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@styles/globals.css";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@config/seo";

const iaQuattro = localFont({
  src: [
    {
      path: "../../public/fonts/iAWriterQuattroS-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iAWriterQuattroS-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ia-quattro",
  display: "swap",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${iaQuattro.variable} font-sans relative flex min-h-screen flex-col bg-zinc-100 dark:bg-zinc-900`}
    >
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
