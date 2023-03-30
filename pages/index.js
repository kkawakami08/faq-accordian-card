import Head from "next/head";
import Question from "@/components/Question";
import Image from "next/image";
import headerImage from "../public/images/illustration-woman-online-mobile.svg";
import headerImageShadow from "../public/images/bg-pattern-mobile.svg";

export default function Home() {
  const inputData = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const accordianElemetArray = inputData.map((item) => (
    <Question question={item.question} answer={item.answer} />
  ));
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
            {accordianElemetArray}
          </div>
        </div>
      </main>
    </>
  );
}
