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
      id: "source",
      name: "View Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () => {},
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 overflow-hidden">
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
      className="p-4 children:[scrollbar-width:none]"
      id="kbar-results-container"
    >
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div className=" box-border pt-4 pb-2 rounded text-sm font-medium text-secondary">
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
