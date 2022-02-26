import type { AppProps } from "next/app";
import Header from "../components/Common/Header";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-zinc-900 relative flex flex-col h-full min-h-screen w-full">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
