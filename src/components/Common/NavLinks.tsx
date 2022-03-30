import { InternalHeaderLink } from "./LinkButton";

const NavLinks = () => {
  return (
    <section className="flex items-center">
      <InternalHeaderLink href="/" text="Home" />
      <InternalHeaderLink href="/bookmarks" text="Bookmarks" />
    </section>
  );
};

export default NavLinks;
