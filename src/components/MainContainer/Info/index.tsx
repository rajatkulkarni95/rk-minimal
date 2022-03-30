const Info = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 animate-fadeIn [animation-delay:1500ms]">
      <span className="text-[11px] text-blue-300 uppercase md:w-24 md:text-right">
        Info
      </span>
      <article className="flex flex-col mt-2 md:ml-5 lg:ml-3">
        <p className="text-sm text-gray-200 leading-[1.5em]">
          I’m Rajat Kulkarni, a Frontend focused Software Engineer, helping
          build clean, user-friendly and accessible applications on the web.{" "}
        </p>
        <p className="text-sm text-gray-200 mt-2 leading-[1.5em]">
          Usually work with Javascript/Typescript, within the React Ecosystem.
        </p>
        <p className="text-sm text-gray-200 mt-2 leading-[1.5em]">
          Tinkering with Animations, Python, Figma & Go.
        </p>
        <p className="text-sm text-gray-200 mt-2 leading-[1.5em]">
          Currently enriching meeting experiences at{" "}
          <a
            href="https://avoma.com"
            className="text-red-400 border-b-2 border-red-400"
            target="_blank"
            rel="noreferrer noopener"
          >
            Avoma
          </a>
        </p>
      </article>
    </section>
  );
};

export default Info;
