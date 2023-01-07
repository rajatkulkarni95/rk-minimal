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
import {
  BeakerIcon,
  BookmarkIcon,
  CodeBracketIcon,
  EyeIcon,
  HomeIcon,
  ServerStackIcon,
} from "@heroicons/react/20/solid";
import TwitterIcon from "@svg/twitter.svg";
import LinkedinIcon from "@svg/linkedin.svg";
import CVIcon from "@svg/cv.svg";
import GithubIcon from "@svg/github.svg";

type TProps = {
  children: React.ReactNode;
};

const CommandBar = ({ children }: TProps) => {
  const router = useRouter();

  const iconClasses = `w-4 h-4 block mr-2 text-secondary group-hover:text-primary group-focus:text-primary group-hover:animate-wiggle`;

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["H"],
      keywords: "home",
      section: "On this site",
      perform: () => router.push("/"),
      icon: <HomeIcon className={iconClasses} />,
    },
    {
      id: "reading-list",
      name: "Reading List",
      shortcut: ["R", "L"],
      keywords: "reading list",
      section: "On this site",
      perform: () => router.push("/reading"),
      icon: <BookmarkIcon className={iconClasses} />,
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["P"],
      keywords: "projects",
      section: "On this site",
      perform: () => router.push("/projects"),
      icon: <ServerStackIcon className={iconClasses} />,
    },
    {
      id: "craft",
      name: "Craft",
      shortcut: ["C"],
      keywords: "craft",
      section: "On this site",
      perform: () => router.push("/craft"),
      icon: <BeakerIcon className={iconClasses} />,
    },
    {
      id: "about",
      name: "About",
      shortcut: ["A"],
      keywords: "about",
      section: "On this site",
      perform: () => router.push("/about"),
      icon: <EyeIcon className={iconClasses} />,
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["V", "S"],
      keywords: "view source",
      section: "On this site",
      perform: () =>
        window.open("https://github.com/rajatkulkarni95/rk-minimal", "_blank"),
      icon: <CodeBracketIcon className={iconClasses} />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["G", "H"],
      keywords: "github",
      section: "On the web",
      perform: () =>
        window.open("https://github.com/rajatkulkarni95/", "_blank"),
      icon: <GithubIcon className={iconClasses} />,
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["T", "W"],
      keywords: "twitter",
      section: "On the web",
      perform: () => window.open("https://twitter.com/jokingRajat", "_blank"),
      icon: <TwitterIcon className={iconClasses} />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["L", "I"],
      keywords: "linkedin",
      section: "On the web",
      perform: () =>
        window.open("https://www.linkedin.com/in/rajatkulkarni95/", "_blank"),
      icon: <LinkedinIcon className={iconClasses} />,
    },
    {
      id: "readcv",
      name: "read.cv",
      shortcut: ["R", "C"],
      keywords: "readcv",
      section: "On the web",
      perform: () => window.open("https://read.cv/rajatk", "_blank"),
      icon: <CVIcon className={iconClasses} />,
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
      className="pt-0 pb-4 children:[scrollbar-width:none]"
      id="kbar-results-container"
    >
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className="pt-4 pl-4 pb-2 text-xs font-medium text-tertiary">
              {item}
            </div>
          ) : (
            <div
              className={`px-4 py-3 flex items-center box-border group ${
                active
                  ? "text-primary bg-secondary"
                  : "text-secondary bg-transparent"
              }`}
            >
              {item.icon}
              {item.name}{" "}
              {item.shortcut && (
                <span className="ml-auto">
                  {item.shortcut.map((shortcut) => (
                    <kbd
                      key={`${shortcut}-${item.name}`}
                      className="ml-1 px-1.5 py-1 font-sans font-medium text-xs bg-tertiary rounded text-secondary group-hover:text-primary"
                    >
                      {shortcut}
                    </kbd>
                  ))}
                </span>
              )}
            </div>
          )
        }
      />
    </div>
  );
}

export default CommandBar;
