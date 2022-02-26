const Header = () => (
  <header className="h-20 w-full flex py-2 px-4 ">
    <div className="h-20 w-20">
      <Circle depth={4} delay={0} style={{ bottom: 0 }} />
      <Circle depth={3} delay={1} style={{ bottom: "56px" }} />
      <Circle depth={2} delay={2} style={{ bottom: "96px" }} />
      <Circle depth={1} delay={3} style={{ bottom: "120px" }} />
      <Circle depth={0.5} delay={4} style={{ bottom: "132px" }} />
    </div>
  </header>
);

type TCircleProps = {
  depth: number;
  delay: number;
  style: object;
};

const Circle = ({ depth, delay, style }: TCircleProps) => (
  <div
    className="circle"
    style={{
      width: `${depth * 16}px`,
      height: `${depth * 16}px`,
      animationName: "revealCircle",
      animationDelay: `${delay * 1000}ms`,
      margin: "0 auto",
      ...style,
    }}
  >
    <div className="cover" />
  </div>
);

export default Header;
