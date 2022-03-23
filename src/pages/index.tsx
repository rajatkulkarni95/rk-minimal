import type { NextPage } from "next";
import MainContainer from "@components/MainContainer";
import { Container } from "@components/Common/Container";
import { TPageProps } from "src/types";

const Home: NextPage<TPageProps> = ({ isSidebarOpen }: TPageProps) => {
  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <MainContainer />
    </Container>
  );
};

export default Home;
