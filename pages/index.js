import Head from "next/head";
import Question from "@/components/Question";
import Image from "next/image";
import headerImage from "../public/images/illustration-woman-online-mobile.svg";
import headerImageShadow from "../public/images/bg-pattern-mobile.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAQ Accordian Card</title>
      </Head>
      <main className="bg-gradient-to-b from-gradientViolet to-gradientBlue py-24 pt-12">
        <div className="w-60 mx-auto  relative z-10">
          <div className=" absolute  ">
            <div className="">
              <Image
                src={headerImage}
                alt="Header Image"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute top-28">
              <Image
                src={headerImageShadow}
                alt="Header Image Shadow"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="bg-white w-11/12 rounded-3xl mx-auto flex flex-col items-center pt-32 pb-10 mt-28 drop-shadow-2xl z-0 px-8">
          <h1 className="text-4xl font-bold text-veryDarkGrayishBlue pb-4">
            FAQ
          </h1>
          <div className="divide-y divide-lightGrayishBlue">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </div>
        </div>
      </main>
    </>
  );
}
