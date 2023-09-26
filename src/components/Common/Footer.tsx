import { useCurrentTime } from "src/hooks/useCurrentTime";

const Footer = () => {
  const { currentTime, currentDay } = useCurrentTime();

  return (
    <footer className="h-12 z-10 flex items-baseline font-normal text-sm text-secondary py-2 px-6 sticky justify-center bottom-0">
      It’s currently {currentTime}, {currentDay} in Mumbai, India
    </footer>
  );
};

export default Footer;
