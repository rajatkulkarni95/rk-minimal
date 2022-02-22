import Info from "./Info";
import Projects from "./Projects";

const MainContainer = () => {
  return (
    <div className="w-full h-full px-6 pb-4">
      <h1 className="mt-8 mb-10 font-normal text-2xl">Hello!</h1>
      <Info />
      <Projects />
    </div>
  );
};

export default MainContainer;
