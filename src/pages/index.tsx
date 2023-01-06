import type { NextPage } from "next";
import { Main } from "@components/Common/Main";
import { TPageProps } from "src/types";
import Greeting from "@components/Greeting";
import Me from "@components/Me";

const Home: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  return (
    <Main isSidebarOpen={isSidebarOpen}>
      <Greeting />
      <Me />
    </Main>
  );
};

export default Home;
