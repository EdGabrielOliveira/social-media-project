import Image, { StaticImageData } from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa6";

type FeedbackProps = {
  name: string;
  comment: string;
  avatar: StaticImageData;
  rating: number;
};

export default function UserFeedback({
  avatar,
  name,
  comment,
  rating = 0,
}: FeedbackProps) {
  return (
    <div>
      <div className="justify-center w-full items-center flex flex-col bg-white p-6 gap-4 rounded-2xl shadow-md shadow-gray-300">
        <Image src={avatar} alt={"Pessoa"} width={70} className="rounded-full" />
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl text-gray-600">{name}</h1>
          <p className="text-gray-500 w-[20rem] text-center">{comment}</p>
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
