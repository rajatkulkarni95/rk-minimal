import { SALUTATIONS } from "../../constants/salutations";
import Greeting from "../Common/Greeting";
import Info from "./Info";
import Projects from "./Projects";
import Work from "./Work";

const MainContainer = () => {
  const salutation =
    SALUTATIONS[Math.floor(Math.random() * SALUTATIONS.length)];
  return (
    <div className="w-full h-full px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-16 lg:w-[720px] lg:h-[600px] xl:my-auto">
      <Greeting salutation={salutation} />
      <Info />
      <Projects />
      <Work />
    </div>
  );
};

export default MainContainer;
