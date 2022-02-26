const Info = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row md:items-baseline opacity-0 animate-fadeIn [animation-delay:500ms]">
      <span className="text-[11px] text-blue-300 uppercase md:w-24 md:text-right">
        Info
      </span>
      <article className="flex flex-col mt-2 md:ml-5 lg:ml-3">
        <p className="text-sm text-gray-200 leading-[1.5em]">
          I’m Rajat Kulkarni, a Frontend focused Software Engineer, helping
          build clean, user-friendly and accessible applications on the web.{" "}
        </p>
        <p className="text-sm text-gray-200 mt-2 leading-[1.5em]">
          I usually work with Javascript (Typescript on my personal projects),
          within the React Ecosystem.
        </p>
      </article>
    </section>
  );
};

export default Info;
