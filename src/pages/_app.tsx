import type { AppProps } from "next/app";
import "@styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import Footer from "@components/Common/Footer";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@config/seo";
import Header from "@components/Common/Header";
import { useApollo } from "@lib/apollo";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <main className="relative flex h-full min-h-screen w-full flex-col bg-zinc-900">
        <DefaultSeo {...defaultSEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ApolloProvider>
  );
}

export default App;
