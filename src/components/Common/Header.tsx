const Header = () => (
  <header className="h-20 w-full flex py-2 px-4 md:px-12 md:py-4">
    <div className="h-16 w-16">
      <Circle depth={4} delay={0} style={{ bottom: 0 }} />
      <Circle depth={3} delay={1} style={{ bottom: "56px" }} innerClass={2} />
      <Circle depth={2} delay={2} style={{ bottom: "96px" }} innerClass={3} />
      <Circle depth={1} delay={3} style={{ bottom: "120px" }} innerClass={4} />
      <Circle
        depth={0.25}
        delay={4}
        style={{ bottom: "130px" }}
        innerClass={5}
      />
    </div>
  </header>
);

type TCircleProps = {
  depth: number;
  delay: number;
  style: object;
  innerClass?: number;
};

const Circle = ({ depth, delay, style, innerClass }: TCircleProps) => (
  <div
    className="circle"
    style={{
      width: `${depth * 16}px`,
      height: `${depth * 16}px`,
      margin: "0 auto",
      ...style,
    }}
  >
    <div className={`cover inner-${innerClass}`} />
  </div>
);

export default Header;
