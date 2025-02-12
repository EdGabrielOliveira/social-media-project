import React from "react";

import Image from "next/image";
import Avatar from "@public/avatar.jpg";

interface UserStatusProps {
  ringStatus?: boolean;
  userName: string;
}

export default function UserStatus({ ringStatus, userName }: UserStatusProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-[3rem]">
      <div className="relative">
        <Image
          src={Avatar}
          alt={"Avatar"}
          className={`${
            ringStatus
              ? "ring-4 scale-125 w-[3rem] ring-transparent bg-gradient-to-br to-green-700 from-green-300 p-[3px] rounded-full"
              : "rounded-full w-[3rem] scale-125 ring-4 ring-gray-200"
          }`}
          width={50}
          height={50}
        />
      </div>
      <p className="text-gray-600 text-[10px] pt-2">{userName}</p>
    </div>
  );
}
