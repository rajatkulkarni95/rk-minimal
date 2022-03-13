import { SALUTATIONS } from "@constants/salutations";
import Greeting from "@components/Greeting";
import Info from "@components/MainContainer/Info";
import Projects from "@components/MainContainer/Projects";
import Work from "@components/MainContainer/Work";
import { Container } from "@styles/common";

const MainContainer = () => {
  const salutation =
    SALUTATIONS[Math.floor(Math.random() * SALUTATIONS.length)];
  return (
    <Container>
      <Greeting salutation={salutation} />
      <Info />
      <Projects />
      <Work />
    </Container>
  );
};

export default MainContainer;
