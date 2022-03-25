import { InternalHeaderLink } from "./LinkButton";

const NavLinks = () => {
  return (
    <section className="absolute left-8 flex flex-col top-1/2 -translate-y-1/2">
      <InternalHeaderLink href="/" text="Home" />
      <InternalHeaderLink href="/bookmarks" text="Bookmarks" />
    </section>
  );
};

export default NavLinks;
