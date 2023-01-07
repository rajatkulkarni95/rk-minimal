import { useState } from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";

type TProps = {
  children: React.ReactNode;
};

const CommandBar = ({ children }: TProps) => {
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      section: "On this site",
      perform: () => router.push("/"),
    },
    {
      id: "reading-list",
      name: "Reading List",
      shortcut: ["r", "l"],
      keywords: "reading list",
      section: "On this site",
      perform: () => router.push("/reading"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects",
      section: "On this site",
      perform: () => router.push("/projects"),
    },
    {
      id: "craft",
      name: "Craft",
      shortcut: ["c"],
      keywords: "craft",
      section: "On this site",
      perform: () => router.push("/craft"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about",
      section: "On this site",
      perform: () => router.push("/about"),
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["v", "s"],
      keywords: "view source",
      section: "On this site",
      perform: () =>
        window.open("https://github.com/rajatkulkarni95/rk-minimal", "_blank"),
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "github",
      section: "On the web",
      perform: () =>
        window.open("https://github.com/rajatkulkarni95/", "_blank"),
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["t", "w"],
      keywords: "twitter",
      section: "On the web",
      perform: () => window.open("https://twitter.com/jokingRajat", "_blank"),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["l", "i"],
      keywords: "linkedin",
      section: "On the web",
      perform: () =>
        window.open("https://www.linkedin.com/in/rajatkulkarni95/", "_blank"),
    },
    {
      id: "readcv",
      name: "read.cv",
      shortcut: ["r", "c"],
      keywords: "readcv",
      section: "On the web",
      perform: () => window.open("https://read.cv/rajatk", "_blank"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 overflow-hidden backdrop-blur-sm">
          <KBarAnimator className="bg-element border border-secondary rounded-lg max-w-[640px] w-full text-primary overflow-hidden">
            <KBarSearch
              defaultPlaceholder="What do you want?"
              className="bg-transparent text-primary outline-none w-full p-4 border-b border-secondary"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
};

function RenderResults() {
  const { results } = useMatches();

  if (results.length === 0) {
    return (
      <div className="flex items-center justify-center h-16 text-secondary">
        I don't know what you are talking about
      </div>
    );
  }

  return (
    <div
      className="pt-0 pb-4 px-4 children:[scrollbar-width:none]"
      id="kbar-results-container"
    >
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="pt-4 pb-2 text-sm font-medium text-secondary">
              {item}
            </div>
          ) : (
            <div
              className={`px-4 py-3 rounded  block box-border  ${
                active
                  ? "text-primary bg-secondary"
                  : "text-secondary bg-transparent"
              }`}
            >
              {item.name}
            </div>
          )
        }
      />
    </div>
  );
}

export default CommandBar;
