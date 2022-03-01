import Location from "@components/Location";
import useWindowSize from "src/hooks/useWindowSize";
import { Size } from "src/types";

const Header = () => {
  const windowSize: Size = useWindowSize();
  const isMobile = (windowSize?.width ?? 641) < 640;

  return (
    <header className="w-full flex justify-between items-center py-2 px-4 md:px-12 md:pt-4 lg:pt-8">
      <div className="h-16 w-16">
        <Circle depth={4} bottom={0} />
        <Circle depth={3} bottom={56} innerClass={2} />
        <Circle depth={2} bottom={96} innerClass={3} />
        <Circle depth={1} bottom={120} innerClass={4} />
        <Circle depth={0.25} bottom={130} innerClass={5} />
      </div>
      {isMobile && <Location />}
    </header>
  );
};

type TCircleProps = {
  depth: number;
  bottom: number;
  innerClass?: number;
};

const Circle = ({ depth, bottom, innerClass }: TCircleProps) => (
  <div
    className="circle"
    style={{
      width: `${depth * 16}px`,
      height: `${depth * 16}px`,
      margin: "0 auto",
      bottom: `${bottom}px`,
    }}
  >
    <div className={`cover inner-${innerClass}`} />
  </div>
);

export default Header;
