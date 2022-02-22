import type { NextPage } from "next";
import MainContainer from "../components/MainContainer";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <MainContainer />
    </main>
  );
};

export default Home;
