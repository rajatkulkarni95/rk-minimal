import type { NextPage } from "next";
import MainContainer from "@components/MainContainer";
import { Main } from "@components/Common/Main";
import { TPageProps } from "src/types";
import Greeting from "@components/Greeting";

const Home: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  return (
    <Main isSidebarOpen={isSidebarOpen}>
      <MainContainer />
    </Main>
  );
};

export default Home;
