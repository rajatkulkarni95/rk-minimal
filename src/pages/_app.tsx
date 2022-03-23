import type { AppProps } from "next/app";
import "@styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import Footer from "@components/Common/Footer";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@config/seo";
import Header from "@components/Common/Header";
import { useApollo } from "@lib/apollo";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarOpen = (handleState: boolean) =>
    setShowSidebar(handleState);

  return (
    <ApolloProvider client={apolloClient}>
      <main className="relative flex h-full min-h-screen w-full flex-col bg-zinc-900">
        <DefaultSeo {...defaultSEO} />
        <Header
          isSidebarOpen={showSidebar}
          handleSidebarOpen={handleSidebarOpen}
        />
        <Component {...pageProps} isSidebarOpen={showSidebar} />
        <Footer />
      </main>
    </ApolloProvider>
  );
}

export default App;
