import React from "react";
import Image from "next/image";
import arrow from "../public/images/icon-arrow-down.svg";

export default function Question() {
  return (
    <div className="flex flex-col gap-2 py-5">
      <div className="flex items-center">
        <h2 className="font-bold text-veryDarkGrayishBlue">
          How many team members can I invite?
        </h2>
        <div className="w-3">
          <Image src={arrow} alt="Arrow Icon" width={500} height={500} />
        </div>
      </div>

      <p className="text-darkGrayishBlue">
        You can invite up to 2 additional users on the Free plan. There is no
        limit on team members for the Premium plan.{" "}
      </p>
    </div>
  );
}
