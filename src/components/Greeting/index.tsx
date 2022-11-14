import { useEffect, useState } from "react";
import Logo from "@svg/logo.svg";
import SiteLogo from "@components/Logo";

type TGreetingProps = {
  salutation: string;
};

const Greeting = ({ salutation }: TGreetingProps) => {
  const [typing, setTyping] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < salutation.length) {
      setTimeout(() => {
        setTyping(typing + salutation[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);

  return (
    <section className="flex items-center pt-24 lg:mt-44 mb-4 md:ml-16">
      <SiteLogo />
      <div className="flex flex-col">
        <h1 className="text-2xl lg:text-4xl font-bold">{salutation}</h1>
        <p className="text-base font-medium text-zinc-500">
          Product Engineer / Pixel Pusher
        </p>
      </div>
    </section>
  );
};

export default Greeting;
