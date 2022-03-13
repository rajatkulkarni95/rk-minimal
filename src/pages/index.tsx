import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import MainContainer from "@components/MainContainer";
import { defaultSEO } from "@config/seo";
import Footer from "@components/Common/Footer";
import Header from "@components/Common/Header";

const Home: NextPage = () => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
};

export default Home;
