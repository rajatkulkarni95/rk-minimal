import { SALUTATIONS } from "@constants/salutations";
import { useTypingText } from "src/hooks/useTypingText";

const Salutation = () => {
  const { word } = useTypingText(SALUTATIONS, 200);
  return (
    <div className="flex items-center">
      <span className="font-semibold">{word}</span>
      <span className="font-normal opacity-0 animate-blinking">|</span>
    </div>
  );
};

export default Salutation;
