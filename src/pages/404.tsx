import { NextPage } from "next";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      <h3 className="text-sm text-zinc-600 dark:text-zinc-300 mb-8 text-center">
        Look, between the two of us, you really shouldn't be here!
      </h3>
      <Link
        href="/"
        className="text-sm text-zinc-900 dark:text-white hover:underline"
      >
        Okay! Take me home
      </Link>
    </div>
  );
};

export default ErrorPage;
