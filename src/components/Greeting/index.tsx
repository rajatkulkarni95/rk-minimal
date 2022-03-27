import { useEffect, useState } from "react";

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
    <div className="flex items-center mt-4 mb-4 md:ml-16">
      <h1 className="font-light text-2xl leading-5">{typing}</h1>
      <span className="text-xl font-semibold opacity-0 animate-blinking">
        _
      </span>
    </div>
  );
};

export default Greeting;
