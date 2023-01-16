import type { NextPage } from "next";
import { Main } from "@components/Common/Main";
import { TPageProps } from "src/types";
import Greeting from "@components/Greeting";
import Me from "@components/Me";
import CommandShortcut from "@components/Common/CommandShortcut";

const Home: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  return (
    <Main isSidebarOpen={isSidebarOpen}>
      <Greeting />
      <Me />
      <div className="mt-8">
        <CommandShortcut />
      </div>
    </Main>
  );
};

export default Home;
