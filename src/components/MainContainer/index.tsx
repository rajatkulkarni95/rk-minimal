import { SALUTATIONS } from "@constants/salutations";
import Greeting from "@components/Greeting";
import Info from "@components/MainContainer/Info";
import Projects from "@components/MainContainer/Projects";
import Work from "@components/MainContainer/Work";
import { Fragment } from "react";

const MainContainer = () => {
  const salutation =
    SALUTATIONS[Math.floor(Math.random() * SALUTATIONS.length)] +
    ", I'm Rajat!";
  return (
    <Fragment>
      <Greeting salutation={salutation} />
      {/* <Info /> */}
      {/* <Projects />
      <Work /> */}
    </Fragment>
  );
};

export default MainContainer;
