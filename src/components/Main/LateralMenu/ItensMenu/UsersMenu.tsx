"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { FcApproval } from "react-icons/fc";

interface UsersMenuProps {
  name: string;
  user: string;
  avatar: StaticImageData;
  verified?: boolean;
}

export default function UsersMenu({ name, avatar, user, verified }: UsersMenuProps) {
  return (
    <div>
      <ul>
        <a href="#">
          <li className="flex flex-row gap-2 items-center bg-gray-200 dark:bg-gray-950 p-1 rounded-xl w-[16rem] hover:scale-[98%]">
            <div className="relative flex flex-row items-end">
              <Image
                src={avatar}
                alt={name}
                width={50}
                height={50}
                className="rounded-full"
              />

              {verified && (
                <FcApproval className="absolute bottom-0 right-0 text-[20px]" />
              )}
            </div>

            <div className="flex flex-col gap-0 m-0 p-0">
              <h1 className="text-[18px] text-gray-600 dark:text-gray-200">{name}</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">@{user}</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}
