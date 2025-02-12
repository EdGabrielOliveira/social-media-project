import React from "react";

import Image from "next/image";
import Avatar from "@public/avatar.jpg";
import { MdAdd } from "react-icons/md";

interface UserStatusProps {
  ringStatus?: boolean;
  isUser?: boolean;
  userName: string;
}

export default function UserStatus({ ringStatus, isUser, userName }: UserStatusProps) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[3rem]">
      <Image
        src={Avatar}
        alt={"Avatar"}
        className={`${
          ringStatus
            ? "ring-4 scale-125 w-[3rem] ring-transparent bg-gradient-to-br mb-2 to-green-700 from-green-300 p-[3px] rounded-full"
            : "rounded-full w-[2.8rem] scale-125 ring-4 ring-transparent"
        }`}
        width={50}
        height={50}
      />
      {!ringStatus && isUser && (
        <span
          className={`${
            isUser
              ? "text-white flex justify-end p-[1px] relative ml-9 translate-y-[-8px] items-end scale-125 bg-green-600 rounded-full"
              : "hidden"
          } text-xs`}
        >
          <MdAdd />
        </span>
      )}
      <p
        className={`${
          ringStatus
            ? "text-gray-600 text-[10px] "
            : "text-gray-600 text-[10px] translate-y-[-2px]"
        }`}
      >
        {userName}
      </p>
    </div>
  );
}
