import useWindowSize from "src/hooks/useWindowSize";
import { Size } from "src/types";
import { InternalHeaderLink } from "./LinkButton";

const NavLinks = () => {
  const windowSize: Size = useWindowSize();
  const isMobile = (windowSize?.width ?? 1026) < 1025;

  if (isMobile) return null;

  return (
    <section className="absolute left-8 flex flex-col top-1/2 -translate-y-1/2">
      <InternalHeaderLink href="/" text="Home" />
      <InternalHeaderLink href="/bookmarks" text="Bookmarks" />
    </section>
  );
};

export default NavLinks;
