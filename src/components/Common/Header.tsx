import Logo from "@svg/logo.svg";
import LogoSmall from "@svg/logo_small.svg";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";
import useWindowSize from "src/hooks/useWindowSize";
import { Size } from "src/types";

const Header = () => {
  const windowSize: Size = useWindowSize();
  const renderLogo = () => {
    if ((windowSize?.width ?? 769) < 768) {
      return <LogoSmall />;
    }
    return <Logo />;
  };
  return (
    <Fragment>
      <header className="w-full z-10 flex justify-between items-center sticky top-0 py-3 md:py-6 px-4 md:px-12">
        <Link href="/">{renderLogo()}</Link>
        <CommandLineIcon className="h-8 w-8 text-primary" />
      </header>
    </Fragment>
  );
};

export default Header;
