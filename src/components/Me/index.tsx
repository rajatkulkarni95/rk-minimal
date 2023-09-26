const Me = () => {
  return (
    <article className="flex flex-col mt-10">
      <p className="text-base md:text-xl font-normal text-primary inline-block">
        Currently responsible for all things frontend at{" "}
        <a
          href="https://avoma.com"
          target="_blank noopener noreferrer"
          className="text-base md:text-base text-primary py-0.5 px-1.5 rounded bg-red-500/70 delay-150 hover:bg-red-500/90 duration-300"
        >
          Avoma
        </a>{" "}
        , helping build enriching meeting experiences.
      </p>
      <p className="text-base md:text-xl font-normal text-primary mt-6">
        Work with React, Typescript and Python. Learning Rust via building.
      </p>
      <p className="text-base md:text-xl font-normal text-primary mt-12">
        Building{" "}
        <a
          href="https://octarine.app"
          target="_blank noopener noreferrer"
          className="text-base md:text-base text-primary py-0.5 px-1.5 rounded bg-violet-700/70 delay-150 hover:bg-violet-700/90 duration-300"
        >
          Octarine
        </a>{" "}
        and losing at Dota on the weekends :)
      </p>
    </article>
  );
};

export default Me;
