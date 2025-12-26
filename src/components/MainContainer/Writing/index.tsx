import Link from "next/link";
import { writing } from "@data/writing";

const Writing = () => {
  return (
    <section>
      <h2 className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">Writing</h2>
      <div className="space-y-2">
        {writing.map((article) => (
          <p key={article.id} className="text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href={`/writing/${article.slug}`}
              className="text-zinc-900 dark:text-white hover:underline underline-offset-2"
            >
              {article.title}
            </Link>
            {" — "}
            {article.description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Writing;
