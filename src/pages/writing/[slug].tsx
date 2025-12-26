import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Main } from "@components/Common/Main";
import { writing } from "@data/writing";

type Props = {
  title: string;
  content: string;
};

const WritingPage: NextPage<Props> = ({ title, content }) => {
  return (
    <Main>
      <article className="space-y-8">
        <header className="space-y-4">
          <Link
            href="/"
            className="text-xs text-zinc-600 dark:text-zinc-400 hover:underline underline-offset-2"
          >
            &larr; Back
          </Link>
          <h1 className="text-base font-semibold text-zinc-900 dark:text-white">
            {title}
          </h1>
        </header>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = writing.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const article = writing.find((a) => a.slug === params?.slug);

  if (!article) {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), "writing", `${article.slug}.md`);
  let content = fs.readFileSync(filePath, "utf-8");

  // Strip the H1 title since we display it separately in the header
  content = content.replace(/^#\s+.+\n+/, "");

  return {
    props: {
      title: article.title,
      content,
    },
  };
};

export default WritingPage;
