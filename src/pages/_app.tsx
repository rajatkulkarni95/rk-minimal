import type { AppProps } from "next/app";
import "@styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative flex h-full min-h-screen w-full flex-col bg-zinc-900">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
