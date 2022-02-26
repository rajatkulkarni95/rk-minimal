import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import MainContainer from "../components/MainContainer";
import { defaultSEO } from "../config/seo";

const Home: NextPage = () => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <MainContainer />
    </>
  );
};

export default Home;
