import type { NextPage } from "next";
import { Main } from "@components/Common/Main";
import Greeting from "@components/Greeting";
import Me from "@components/Me";
import CommandShortcut from "@components/Common/CommandShortcut";

const Home: NextPage = () => {
  return (
    <Main>
      <Greeting />
      <Me />
      <div className="mt-8">
        <CommandShortcut />
      </div>
    </Main>
  );
};

export default Home;
