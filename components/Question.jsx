import React, { useState } from "react";
import Image from "next/image";
import arrow from "../public/images/icon-arrow-down.svg";

export default function Question({ question, answer }) {
  const [accordianData, setAccordianData] = useState({
    questionData: question,
    answerData: answer,
    clicked: false,
  });

  const handleClick = () => {
    setAccordianData((prevAccordianData) => {
      return {
        ...prevAccordianData,
        clicked: !prevAccordianData.clicked,
      };
    });
  };
  return (
    <div className="flex flex-col gap-2 py-5" onClick={handleClick}>
      <div className="flex items-center">
        <h2 className="font-bold text-veryDarkGrayishBlue">
          {accordianData.questionData}
        </h2>
        <div className="w-3">
          <Image src={arrow} alt="Arrow Icon" width={500} height={500} />
        </div>
      </div>

      <p className="text-darkGrayishBlue">{accordianData.answerData}</p>
    </div>
  );
}
