type TProps = {
  href: string;
  text: string;
  classes?: string;
};

export const PrimaryLinkButton = ({ href, text, classes }: TProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="py-1 px-3 rounded-md text-xs bg-zinc-300 text-zinc-900 border border-zinc-500 hover:bg-zinc-100"
    >
      {text}
    </a>
  );
};

export const SecondaryLinkButton = ({ href, text, classes }: TProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="py-1 px-3 rounded-md text-xs bg-zinc-800 text-zinc-50 border border-zinc-500 hover:bg-zinc-700"
    >
      {text}
    </a>
  );
};
