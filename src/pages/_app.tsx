import type { AppProps } from "next/app";
import "@styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import Footer from "@components/Common/Footer";
import { DefaultSeo } from "next-seo";
import { defaultSEO } from "@config/seo";
import Header from "@components/Common/Header";
import { useApollo } from "@lib/apollo";
import { useState } from "react";
import CommandBar from "@components/CommandBar";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  const isBasePath = router.pathname === "/";

  return (
    <ApolloProvider client={apolloClient}>
      <CommandBar>
        <main className="relative flex h-full min-h-screen flex-col bg-[#101010]">
          <DefaultSeo {...defaultSEO} />
          {!isBasePath && <Header />}
          <Component {...pageProps} isSidebarOpen={showSidebar} />
          <Footer />
        </main>
      </CommandBar>
    </ApolloProvider>
  );
}

export default App;
