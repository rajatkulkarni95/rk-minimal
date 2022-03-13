import { Container } from "@styles/common";
import { NextPage } from "next";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <Container>
      <h3 className="text-md my-16 text-center font-medium text-gray-200 xl:text-lg">
        Look, between the two of us, you really shouldn't be here!
      </h3>
      <section className="flex justify-center">
        <Link href="/">
          <a className=" w-fit rounded-md border-2 border-blue-700 bg-transparent py-2 px-3 hover:bg-blue-700">
            Okay! Take me home
          </a>
        </Link>
      </section>
    </Container>
  );
};

export default ErrorPage;
