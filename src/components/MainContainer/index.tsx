import { SALUTATIONS } from "@constants/salutations";
import Greeting from "@components/Greeting";
import Info from "@components/MainContainer/Info";
import Projects from "@components/MainContainer/Projects";
import Work from "@components/MainContainer/Work";

const MainContainer = () => {
  const salutation =
    SALUTATIONS[Math.floor(Math.random() * SALUTATIONS.length)];
  return (
    <div className="w-full h-full px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-10 lg:pb-16 lg:w-[720px] lg:h-[600px] xl:my-auto">
      <Greeting salutation={salutation} />
      <Info />
      <Projects />
      <Work />
    </div>
  );
};

export default MainContainer;
