import Image, { StaticImageData } from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa6";

type FeedbackProps = {
  name: string;
  job?: string;
  comment: string;
  avatar: StaticImageData;
  rating: number;
};

export default function UserFeedback({
  avatar,
  job,
  name,
  comment,
  rating = 0,
}: FeedbackProps) {
  return (
    <div>
      <div className="justify-center w-full items-center flex flex-1 flex-col bg-white p-6 gap-4 h-[18rem] text-center mb-4 mt-4 rounded-2xl shadow-md shadow-gray-300 md:w-[24rem] xs:w-[20rem]">
        <Image src={avatar} alt={"Pessoa"} width={70} className="rounded-full" />
        <div className="flex-col gap-2 items-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl text-gray-600">{name}</h1>
            <p className="text-gray-400 text-xs uppercase">{job}</p>
          </div>
          <p className="text-gray-500 md:w-[18rem] xs:w-[16rem] text-center">{comment}</p>
        </div>

        <div className="flex text-yellow-500 pt-2">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
