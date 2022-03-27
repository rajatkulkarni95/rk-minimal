import { InternalHeaderLink } from "./LinkButton";

const NavLinks = () => {
  return (
    <section className="flex items-center mx-10">
      <InternalHeaderLink href="/" text="Home" />
      <InternalHeaderLink href="/bookmarks" text="Bookmarks" />
    </section>
  );
};

export default NavLinks;
