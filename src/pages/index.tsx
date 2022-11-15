import type { NextPage } from "next";
import { Main } from "@components/Common/Main";
import { TPageProps } from "src/types";
import Greeting from "@components/Greeting";
import { SALUTATIONS } from "@constants/salutations";

const Home: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  const salutation =
    SALUTATIONS[Math.floor(Math.random() * SALUTATIONS.length)] +
    ", I'm Rajat!";
  return (
    <Main isSidebarOpen={isSidebarOpen}>
      <Greeting salutation={salutation} />
    </Main>
  );
};

export default Home;
