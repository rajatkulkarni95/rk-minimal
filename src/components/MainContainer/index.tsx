import Info from "@components/MainContainer/Info";
import Projects from "@components/MainContainer/Projects";
import Work from "@components/MainContainer/Work";
import Links from "@components/MainContainer/Links";

const MainContainer = () => {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-base font-semibold text-zinc-900 dark:text-white mb-8">
          Rajat Kulkarni
        </h1>
      </header>
      <Info />
      <Work />
      <Projects />
      <Links />
    </div>
  );
};

export default MainContainer;
