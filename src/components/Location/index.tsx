import { CURRENT_LOCATION } from "@constants/index";
import { useCurrentTime } from "src/hooks/useCurrentTime";

const Location = () => {
  const { currentTime } = useCurrentTime();
  return (
    <section className="flex flex-col opacity-0 animate-fadeIn [animation-delay:5000ms]">
      <div className="flex items-center mb-1">
        <span className="text-zinc-400 text-xs mr-2">{currentTime}</span>
        <span className="text-zinc-50 text-xs mr-2">{CURRENT_LOCATION}</span>
      </div>
    </section>
  );
};

export default Location;
