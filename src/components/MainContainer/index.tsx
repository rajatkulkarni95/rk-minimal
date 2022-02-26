import Info from "./Info";
import Projects from "./Projects";
import Work from "./Work";

const MainContainer = () => {
  return (
    <div className="w-full h-full px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-16 lg:w-[720px] lg:h-[600px] xl:my-auto">
      <h1 className="mt-6 mb-8 font-light text-2xl md:ml-16 md:mt-8 md:mb-10">
        Hello!
      </h1>
      <Info />
      <Projects />
      <Work />
    </div>
  );
};

export default MainContainer;
