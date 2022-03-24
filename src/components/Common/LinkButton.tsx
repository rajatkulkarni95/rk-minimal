import Link from "next/link";

type TProps = {
  href: string;
  text: string;
};

type TInternalLink = {
  href: string;
  text: string;
  onClick: () => void;
};

export const PrimaryLinkButton = ({ href, text }: TProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="py-1 px-3 rounded-md text-xs bg-zinc-300 text-zinc-900 border border-zinc-500 hover:bg-zinc-100"
    >
      {text}
    </a>
  );
};

export const SecondaryLinkButton = ({ href, text }: TProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="py-1 px-3 rounded-md text-xs bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
    >
      {text}
    </a>
  );
};

export const InternalLink = ({ href, text, onClick }: TInternalLink) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="py-2 px-4 rounded-md text-sm text-left cursor-pointer bg-zinc-800 text-zinc-50 hover:bg-zinc-700 w-full mb-4"
      >
        {text}
      </button>
    </Link>
  );
};
