import SiteLogo from "@components/Logo";
import Salutation from "./Salutation";

const Greeting = () => {
  return (
    <section className="flex items-center pt-24 lg:pt-44 mb-4">
      <SiteLogo />
      <div className="flex flex-col">
        <h1 className="text-2xl lg:text-4xl font-bold text-primary flex items-center">
          <Salutation />, I'm Rajat!
        </h1>
        <p className="text-base font-normal text-secondary">
          Product Engineer / Pixel Pusher
        </p>
      </div>
    </section>
  );
};

export default Greeting;
