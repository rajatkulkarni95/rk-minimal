import { NextPage } from "next";
import Link from "next/link";

const ReadingListPage: NextPage = () => {
  return (
    <div className="w-full h-screen px-4 pb-4 mx-auto md:w-3/4 md:mt-0 md:pb-10 lg:pb-16 lg:w-[720px] xl:my-auto">
      <h3 className="text-md my-16 text-center font-medium text-gray-200 xl:text-lg">
        Look, between the two of us, I don't really read!
      </h3>
    </div>
  );
};

export default ReadingListPage;
