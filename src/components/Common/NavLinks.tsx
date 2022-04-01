import { InternalHeaderLink } from "./LinkButton";

const NavLinks = () => {
  return (
    <section className="flex items-center opacity-0 animate-fadeIn [animation-delay:1500ms]">
      <InternalHeaderLink href="/" text="Info" />
      <InternalHeaderLink href="/bookmarks" text="Bookmarks" />
    </section>
  );
};

export default NavLinks;
